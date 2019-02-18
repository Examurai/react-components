const REQUEST = 'DICTIONARY/REQUEST';
const RECEIVE = 'DICTIONARY/RECEIVE';
const REJECT = 'DICTIONARY/REJECT';

const initialState = {
  isLoading: false,
};

export const request = () => async (dispatch, getState) => {
  dispatch({ type: REQUEST });
  try {
    dispatch({ type: RECEIVE });
  } catch (error) {
    dispatch({ type: REJECT });
    console.error('DICTIONARY REQUEST', error);
  }
};

export default (state, action) => {
  state = state || initialState;

  if (action.type === REQUEST) {
    return { ...state, isLoading: true };
  }

  if (action.type === RECEIVE) {
    return { ...state, isLoading: false };
  }

  if (action.type === REJECT) {
    return initialState;
  }

  return state;
};
