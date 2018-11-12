import {
  EVENTS_FETCHED
} from './layoutActions'

export default (state = [], action) => {
  const {type, eventList} = action
  switch (type) {
    case EVENTS_FETCHED:
      return eventList
    default:
      return state
  }
}