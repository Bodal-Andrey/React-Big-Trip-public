import {combineReducers} from "redux";
import {reducer as events} from "./events/events.js";
import {reducer as addEvent} from "./add-event/add-event.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.EVENTS]: events,
  [NameSpace.ADD_EVENT]: addEvent,
});
