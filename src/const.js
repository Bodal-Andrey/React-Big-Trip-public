const SortingTypes = {
  EVENT: `event`,
  TIME: `time`,
  PRICE: `price`,
};

const FilterTypes = {
  EVERYTHING: `everything`,
  FUTURE: `future`,
  PAST: `past`,
};

const MenuItem = {
  TABLE: `control__table`,
  STATS: `control__stats`,
};

const eventActions = {
  'taxi': `to`,
  'bus': `to`,
  'train': `to`,
  'ship': `to`,
  'transport': `to`,
  'drive': `to`,
  'flight': `to`,
  'check-in': `in`,
  'sightseeing': `in`,
  'restaurant': `in`,
};

const ChartTypeLabelsMap = {
  'taxi': `🚕 TAXI`,
  'bus': `🚌 BUS`,
  'train': `🚂 TRAIN`,
  'ship': `🛳 SHIP`,
  'transport': `🚊 TRANSPORT`,
  'drive': `🚗 DRIVE`,
  'flight': `✈️ FLIGHT`,
  'check-in': `🏨 CHECK-IN`,
  'sightseeing': `🏛 SIGHTSEEING`,
  'restaurant': `🍴 RESTAURANT`,
};

const TimeInMs = {
  DAY: 86400000,
  HOUR: 3600000,
  MINUTE: 60000,
};

const ServerUrl = {
  POINTS: `https://11.ecmascript.pages.academy/big-trip/points`,
  OFFERS: `https://11.ecmascript.pages.academy/big-trip/offers`,
  DESTINATIONS: `https://11.ecmascript.pages.academy/big-trip/destinations`
};

const Method = {
  GET: `GET`,
  POST: `POST`,
  PUT: `PUT`,
  DELETE: `DELETE`
};

const TRANSPORT_TYPES = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`];

const EVENT_TYPES = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`];

export {
  SortingTypes,
  FilterTypes,
  MenuItem,
  eventActions,
  ChartTypeLabelsMap,
  TimeInMs,
  ServerUrl,
  Method,
  TRANSPORT_TYPES,
  EVENT_TYPES,
};
