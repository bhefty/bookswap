import Auth0Lock from 'auth0-lock'
import { push } from 'react-router-redux'
import { call, put, take } from 'redux-saga/effects'

import { removeStoredAuthState, setStoredAuthState } from 'utils/auth'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './constants'

import { loginSuccess, loginFailure } from './actions'

export function * loginRequestSaga () {
  const lock = new Auth0Lock(
    process.env.AUTH0_CLIENT_ID,
    process.env.AUTH0_DOMAIN,
    {
      auth: { redirect: false },
      languageDictionary: { title: 'React Redux Auth Boilerplate' }
    }
  )

  const showLock = () => {
    new Promise((resolve, reject) => { // eslint-disable-line no-new
      lock.on('hide', () => reject('Lock closed')) // eslint-disable-line prefer-promise-reject-errors

      lock.on('authenticated', (authResult) => {
        lock.getuserInfo(authResult.accessToken, (error, profile) => {
          if (!error) {
            lock.hide()
            resolve({ profile, idToken: authResult.idToken })
          }
        })
      })

      lock.on('unrecoverable_error', (error) => {
        lock.hide()
        reject(error)
      })

      lock.show()
    })
  }

  try {
    const { profile, idToken } = yield call(showLock)

    yield put(loginSuccess(profile, idToken))
    yield put(push('/dashboard'))
  } catch (error) {
    yield put(loginFailure(error))
    yield put(put('/'))
  }
}

export function * watchLoginRequest () {
  while (true) {
    yield take(LOGIN_REQUEST)
    yield call(loginRequestSaga)
  }
}

export function * watchLoginSuccess () {
  while (true) {
    const { profile, idToken } = yield take(LOGIN_SUCCESS)

    setStoredAuthState(profile, idToken)
  }
}

export function * watchLoginFailure () {
  while (true) {
    yield take(LOGIN_FAILURE)

    removeStoredAuthState()
  }
}

export function * watchLogout () {
  while (true) {
    yield take(LOGOUT)

    removeStoredAuthState()

    yield put(push('/'))
  }
}

export function * authSagas () {
  return [
    watchLoginSuccess,
    watchLoginRequest,
    watchLoginFailure,
    watchLogout
  ]
}

// export default function * authSaga () {
//   yield [
//     fork(watchLoginSuccess),
//     fork(watchLoginRequest),
//     fork(watchLoginFailure),
//     fork(watchLogout)
//   ]
// }
