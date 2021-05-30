import {extend} from "../../utils/utils.js";

const initialState = {
  isAddEvent: false,
};

const ActionType = {
  CHANGE_ADD_BUTTON_STATUS: `CHANGE_ADD_BUTTON_STATUS`,
};

const ActionCreator = {
  changeAddStatus: () => ({
    type: ActionType.CHANGE_ADD_BUTTON_STATUS,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ADD_BUTTON_STATUS:
      return extend(state, {isAddEvent: !state.isAddEvent});
    default:
      return state;
  }
};

export {
  ActionType,
  ActionCreator,
  reducer,
};
