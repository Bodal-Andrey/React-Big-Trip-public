import {extend} from "../../utils/utils.js";
import {SortingTypes, FilterTypes} from "../../const.js";
import {eventAdapter, destinationAdapter, offerAdapter, createEventAdapter} from '../adapters.js';

const initialState = {
  sortType: SortingTypes.EVENT,
  filterType: FilterTypes.EVERYTHING,
  events: [],
  destinations: [],
  offers: [],
  errorText: ``,
  loadStatus: false,
};

const ActionType = {
  LOAD_EVENTS: `LOAD_EVENTS`,
  LOAD_DESTINATIONS: `LOAD_DESTINATIONS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_SORT: `CHANGE_SORT`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  CHANGE_ERROR: `CHANGE_ERROR`,
  CHANGE_LOAD_STATUS: `CHANGE_LOAD_STATUS`,
  DELETE_EVENT: `DELETE_EVENT`,
  CREATE_EVENT: `CREATE_EVENT`,
  UPDATE_FAVORITE: `UPDATE_FAVORITE`,
};

const ActionCreator = {
  changeSort: (sortType) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortType
  }),
  changeFilter: (filterType) => ({
    type: ActionType.CHANGE_FILTER,
    payload: filterType
  }),
  changeError: (errorText) => ({
    type: ActionType.CHANGE_ERROR,
    payload: errorText
  }),
  changeLoadStatus: (loadStatus) => ({
    type: ActionType.CHANGE_LOAD_STATUS,
    payload: loadStatus
  }),
  loadEvents: (loadedEvents) => ({
    type: ActionType.LOAD_EVENTS,
    payload: loadedEvents
  }),
  loadDestinations: (loadedDestination) => ({
    type: ActionType.LOAD_DESTINATIONS,
    payload: loadedDestination
  }),
  loadOffers: (loadedOffers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: loadedOffers
  }),
  deleteEvent: (event) => ({
    type: ActionType.DELETE_EVENT,
    payload: event
  }),
  createEvent: (createdEvent) => ({
    type: ActionType.CREATE_EVENT,
    payload: createdEvent
  }),
  updateFavorite: (event) => ({
    type: ActionType.UPDATE_FAVORITE,
    payload: event
  }),
};

const Operation = {
  loadEvents: () => (dispatch, getState, api) => {
    return api.get(`/points`)
    .then((data) => {
      const loadedEvents = data.map((event) => eventAdapter(event));
      dispatch(ActionCreator.loadEvents(loadedEvents));
      dispatch(ActionCreator.changeLoadStatus(true));
    });
  },
  loadDestinations: () => (dispatch, getState, api) => {
    return api.get(`/destinations`)
    .then((data) => {
      const loadedDestinations = data.map((evt) => destinationAdapter(evt));
      dispatch(ActionCreator.loadDestinations(loadedDestinations));
    });
  },
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/offers`)
    .then((data) => {
      dispatch(ActionCreator.loadOffers(data));
    });
  },
  deleteEvent: (eventId) => (dispatch, getState, api) => {
    return api.delete(`/points/${eventId}`)
    .then((data) => {
      dispatch(ActionCreator.deleteEvent(offerAdapter(data)));
    });
  },
  createEvent: () => (dispatch, getState, api) => {
    return api.post(`/points`)
    .then((data) => {
      dispatch(ActionCreator.createEvent(createEventAdapter(data)));
    });
  },
  updateFavorite: (eventId) => (dispatch, getState, api) => {
    return api.put(`/points/${eventId}`)
    .then((data) => {
      dispatch(ActionCreator.updateFavorite(offerAdapter(!data.is_favorite)));
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORT:
      return extend(state, {sortType: action.payload});
    case ActionType.CHANGE_FILTER:
      return extend(state, {filterType: action.payload});
    case ActionType.CHANGE_ERROR:
      return extend(state, {errorText: action.payload});
    case ActionType.CHANGE_LOAD_STATUS:
      return extend(state, {loadStatus: action.payload});
    case ActionType.LOAD_EVENTS:
      return extend(state, {events: action.payload});
    case ActionType.LOAD_DESTINATIONS:
      return extend(state, {destinations: action.payload});
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.DELETE_EVENT:
      const indexOfDelete = state.events.findIndex((event) => event.id === action.payload.id);
      return extend(state, {events: [].concat(...state.events.slice(0, indexOfDelete), ...state.events.slice(indexOfDelete + 1, state.events.length))});
    case ActionType.CREATE_EVENT:
      return extend(state, {events: [].concat(...state.events, action.payload)});
    case ActionType.UPDATE_FAVORITE:
      return extend(state, {event: action.payload});
    default:
      return state;
  }
};

export {
  ActionType,
  ActionCreator,
  Operation,
  reducer,
};
