import { getDataRandom } from '../../helper';
import { dataDefault } from '../../data';
const CHART_RESET = 'CHART/RESET'
const CHART_RANDOM = 'CHART/RANDOM'
const CHART_EMPTY = 'CHART/EMPTY'

const initialState = {
  data: dataDefault
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHART_RESET:
      return {
        ...state,
        data: dataDefault
      }

    case CHART_RANDOM:
      return {
        ...state,
        data: action.payload
      }

    case CHART_EMPTY:
      return {
        ...state,
        data: []
      }

    default:
      return state
  }
}

export const random = () => {
  return dispatch => {
    dispatch({
      type: CHART_RANDOM,
      payload: getDataRandom()
    })
  }
}

export const reset = () => {
  return dispatch => {
    dispatch({
      type: CHART_RESET,
      payload: dataDefault
    })
  }
}

export const empty = () => {
  return dispatch => {
    dispatch({
      type: CHART_EMPTY
    })
  }
}

export const getChartData = (state) => state.chart.data;