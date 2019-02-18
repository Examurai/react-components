import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools  } from 'redux-devtools-extension';
import reducers from './modules';

export default function configureStore(history, initialState) {
  const middleware = [thunk, routerMiddleware(history)];

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    ),
  );
}
