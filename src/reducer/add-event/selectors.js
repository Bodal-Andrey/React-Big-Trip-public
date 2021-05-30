import NameSpace from "../name-space.js";

const getIsAddEvent = (state) => {
  return state[NameSpace.ADD_EVENT].isAddEvent;
};

export {
  getIsAddEvent,
};
