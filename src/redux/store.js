import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware, logger),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  ),
);

sagaMiddleware.run(rootSaga);

export default store;