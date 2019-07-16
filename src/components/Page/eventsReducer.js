import {
  FETCH_EVENTS,
} from './eventsActions';

export default (state, action) => {
  const { type, events } = action;
  switch (type) {
    case FETCH_EVENTS:
      return events;
    default:
      return state;
  }
};
