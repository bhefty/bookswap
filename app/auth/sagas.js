import Auth0Lock from 'auth0-lock'
import { push } from 'react-router-redux'
import { call, put, take, fork, all } from 'redux-saga/effects'

import { removeStoredAuthState, setStoredAuthState } from 'utils/auth'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './constants'

import { loginSuccess, loginFailure } from './actions'

// Ignore since Auth0 handles tests, maybe add some unit tests in future
/* istanbul ignore next */
export function * loginRequestSaga () {
  /* istanbul ignore next */
  const lock = new Auth0Lock(
    process.env.AUTH0_CLIENT_ID,
    process.env.AUTH0_DOMAIN,
    {
      auth: { redirect: false },
      languageDictionary: { title: 'Bookswap' }
    }
  )
  /* istanbul ignore next */
  const showLock = () => {
    return new Promise((resolve, reject) => { // eslint-disable-line no-new
      lock.on('hide', () => reject('Lock closed')) // eslint-disable-line prefer-promise-reject-errors

      lock.on('authenticated', (authResult) => {
        lock.getUserInfo(authResult.accessToken, (error, profile) => {
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
  /* istanbul ignore next */
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
    /* istanbul ignore next */
    setStoredAuthState(profile, idToken)
    console.log('Logged in!')
  }
}

export function * watchLoginFailure () {
  while (true) {
    yield take(LOGIN_FAILURE)
    /* istanbul ignore next */
    removeStoredAuthState()
  }
}

export function * watchLogout () {
  while (true) {
    yield take(LOGOUT)
    /* istanbul ignore next */
    removeStoredAuthState()

    yield put(push('/'))
  }
}

export default function * authSagas () {
  yield all([
    fork(watchLoginSuccess),
    fork(watchLoginRequest),
    fork(watchLoginFailure),
    fork(watchLogout)
  ])
}
