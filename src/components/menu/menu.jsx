import React from "react";

class Menu extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h2 className="visually-hidden">Switch trip view</h2>
        <nav className="trip-controls__trip-tabs  trip-tabs">
          <a id="control__table" className="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
          <a id="control__stats" className="trip-tabs__btn" href="#">Stats</a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Menu;
