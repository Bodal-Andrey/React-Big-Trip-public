import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Trip from "../trip/trip.jsx";
import Menu from "../menu/menu.jsx";
import Filters from "../filters/filters.jsx";
import {ActionCreator as AddEventActionCreator} from "../../reducer/add-event/add-event.js";
import {ActionCreator as EventActionCreator} from "../../reducer/events/events.js";
import {SortingTypes, FilterTypes} from "../../const.js";

const Header = ({events, onButtonClick}) => {
  return (
    <header className="page-header">
      <div className="page-body__container  page-header__container">
        <img className="page-header__logo" src="img/logo.png" width={42} height={42} alt="Trip logo" />
        <div className="trip-main">
          <Trip events={events} />
          <div className="trip-main__trip-controls  trip-controls">
            <Menu />
            <Filters />
          </div>
          <button onClick={() => onButtonClick()} className="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  events: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        startDate: PropTypes.number.isRequired,
        endDate: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        offers: PropTypes.array.isRequired,
        photos: PropTypes.array.isRequired,
        isFavorite: PropTypes.bool.isRequired,
      })
  ),
  onButtonClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onButtonClick() {
    dispatch(AddEventActionCreator.changeAddStatus());
    dispatch(EventActionCreator.changeSort(SortingTypes.EVENT));
    dispatch(EventActionCreator.changeFilter(FilterTypes.EVERYTHING));
  }
});

export default connect(null, mapDispatchToProps)(Header);
