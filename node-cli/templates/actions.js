import ActionTypes from 'constants/actionTypes/<%pathHolder%>'

import {
  wrapAction
} from 'utils/fetch'


export {
  fetchIndexList (params) {
  return wrapAction({
    type: ActionTypes.temp,
    endpoint: 'url',
    body: params,
    method: 'GET'
  })
}
}
