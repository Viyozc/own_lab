import ActionTypes from 'constants/actionTypes/<%pathHolder%>'

import {
  wrapAction
} from 'utils/fetch'

export default {
  fetchIndexList (params) {
	  return wrapAction({
	    type: ActionTypes.temp,
	    endpoint: 'url',
	    body: params,
	    method: 'GET'
	  })
  }
}
