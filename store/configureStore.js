import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './rootReducer'

const middlewares = compose(
  applyMiddleware(
    thunkMiddleware,
  ),
  // eslint-disable-next-line no-undef
  typeof (window) !== 'undefined' && window.devToolsExtension
    ? window.devToolsExtension()
    : _ => _,
)

const initStore = (initState) => {
  const store = createStore(
    reducer,
    initState,
    middlewares,
  )
  if (module.hot) module.hot.accept('./rootReducer', () => store.replaceReducer(reducer))
  return store
}

export default initStore
