import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import sagas from './sagas'
import rootReducer from './rootReducers'

const persistConfig = {
  key: 'rd-web',
  storage,
  whitelist: ['caseStudy', 'header', 'footer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Redux DevTools Extension for Chrome and Firefox
const reduxDevTool = () => {
  return typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
}

export default function configureStore (initialState, history) {
  const sagaMiddleware = createSagaMiddleware()

  const middleware = applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
    logger
  )

  const composedStoreEnhancer = compose(
    middleware,
    reduxDevTool()
  )

  const store = composedStoreEnhancer(createStore)(persistedReducer, initialState)

  sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('./rootReducers', () => {
      store.replaceReducer(require('./rootReducers'))
    })
  }
  // let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  global.store = store

  return { store, persistor }
  // return store
}
