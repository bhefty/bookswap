/**
 * Asynchronously import the component and reducer/sagas if provided
 */

import asyncComponent from './utils/asyncComponent'
import { getAsyncInjectors } from './utils/asyncInjectors'

function appComponents (store) {
  const { injectReducer, injectSagas } = getAsyncInjectors(store) // eslint-disable-line no-unused-vars
  return {
    HomePage: asyncComponent({
      component: () => import('containers/HomePage'),
      injectReducer,
      name: 'home',
      reducer: () => import('containers/HomePage/reducer'),
      injectSagas,
      sagas: () => import('containers/HomePage/sagas')
    }),
    FeaturePage: asyncComponent({
      component: () => import('containers/FeaturePage')
    }),
    Dashboard: asyncComponent({
      component: () => import('containers/Dashboard')
    }),
    NotFoundPage: asyncComponent({
      component: () => import('containers/NotFoundPage')
    })
  }
}

export default appComponents
