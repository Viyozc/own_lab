import ActionTypes from 'constants/actionTypes/<%pathHolder%>'

import {
  wrapAction
} from 'utils/fetch'

let temp = (params) => {
  return wrapAction({
    type: ActionTypes.temp,
    endpoint: 'url',
    body: params,
    method: 'GET'
  })
}

export {
  temp
}
