import {SortingTypes, FilterTypes} from "../const.js";

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const sortingEvents = (events, sortType) => {
  let sortedEvents = [];

  switch (sortType) {
    case SortingTypes.EVENT:
      sortedEvents = events;
      break;
    case SortingTypes.TIME:
      sortedEvents = events.slice().sort((a, b) => (b.endDate - b.startDate) - (a.endDate - a.startDate));
      break;
    case SortingTypes.PRICE:
      sortedEvents = events.slice().sort((a, b) => b.price - a.price);
      break;
  }

  return sortedEvents;
};

const getFutureEvents = (events) => {
  return events.filter((event) => event.startDate > Date.now()).sort((a, b) => a.startDate - b.startDate);
};

const getPastEvents = (events) => {
  return events.filter((event) => event.endDate < Date.now()).sort((a, b) => a.startDate - b.startDate);
};

const getEventsByFilter = (events, filterType) => {
  switch (filterType) {
    case FilterTypes.EVERYTHING:
      return events.slice().sort((a, b) => a.startDate - b.startDate);
    case FilterTypes.FUTURE:
      return getFutureEvents(events);
    case FilterTypes.PAST:
      return getPastEvents(events);
    default:
      return events;
  }
};

export {
  extend,
  sortingEvents,
  getFutureEvents,
  getPastEvents,
  getEventsByFilter
};
