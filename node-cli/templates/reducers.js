import assign from 'object-assign'
import ActionTypes from 'constants/actionTypes/<%pathHolder%>'
import {
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAILURE
} from 'redux-fetch-elegant'

function IndexPage (state = null, action) {
  switch (action.type) {
    case ActionTypes.temp:
      switch (action.status) {
        case STATUS_SUCCESS:
          return {...state}
      }
      return state
  }
  return state
}
export default {
  IndexPage
}
