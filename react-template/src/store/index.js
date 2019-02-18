import { createBrowserHistory } from 'history';
import configureStore from './configureStore';
import { PUBLIC_URL } from '../constants';

export const history = createBrowserHistory({ basename: PUBLIC_URL });

const initialState = window.initialReduxState;
export const store = configureStore(history, initialState);
