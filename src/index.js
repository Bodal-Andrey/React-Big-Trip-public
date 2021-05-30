import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer.js";
import {Operation as EventsOperation, ActionCreator as EventsActionCreator} from "./reducer/events/events.js";
import {createApi} from "./api.js";

const onError = ((err) => {
  if (err.response) {
    store.dispatch(EventsActionCreator.changeError(err.toJSON().message));
    throw err;
  }
});

const api = createApi(onError);

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(EventsOperation.loadEvents());
store.dispatch(EventsOperation.loadDestinations());
store.dispatch(EventsOperation.loadOffers());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
