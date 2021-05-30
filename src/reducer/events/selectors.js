import {createSelector} from "reselect";
import {getEventsByFilter, sortingEvents} from "../../utils/utils.js";
import NameSpace from "../name-space.js";

const getSortType = (state) => {
  return state[NameSpace.EVENTS].sortType;
};

const getFilterType = (state) => {
  return state[NameSpace.EVENTS].filterType;
};

const getEvents = (state) => {
  return state[NameSpace.EVENTS].events;
};

const getOffers = (state) => {
  return state[NameSpace.EVENTS].offers;
};

const getDestinations = (state) => {
  return state[NameSpace.EVENTS].destinations;
};

const getErrorText = (state) => {
  return state[NameSpace.EVENTS].errorText;
};

const getLoadStatus = (state) => {
  return state[NameSpace.EVENTS].loadStatus;
};

const getFilteredEvents = createSelector(
    getEvents,
    getFilterType,
    (events, filterType) => getEventsByFilter(events, filterType)
);

const getSortedFilteredEvents = createSelector(
    getFilteredEvents,
    getSortType,
    (events, sortType) => sortingEvents(events, sortType)

);

export {
  getSortType,
  getFilterType,
  getEvents,
  getOffers,
  getDestinations,
  getErrorText,
  getLoadStatus,
  getFilteredEvents,
  getSortedFilteredEvents,
};
