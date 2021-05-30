import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {SortingTypes} from "../../const.js";
import {ActionCreator} from "../../reducer/events/events.js";
import {getSortType} from "../../reducer/events/selectors.js";

class Sort extends React.Component {
  render() {
    const {onSortItemClick, sortType} = this.props;

    return (
      <form className="trip-events__trip-sort  trip-sort" action="#" method="get">
        <span className="trip-sort__item  trip-sort__item--day">Day</span>
        <div className="trip-sort__item  trip-sort__item--event">
          <input onClick={() => onSortItemClick(SortingTypes.EVENT)} id="sort-event" className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" defaultValue="sort-event" checked={sortType === SortingTypes.EVENT ? `checked` : ``} />
          <label className="trip-sort__btn" htmlFor="sort-event">Event</label>
        </div>
        <div className="trip-sort__item  trip-sort__item--time">
          <input onClick={() => onSortItemClick(SortingTypes.TIME)} id="sort-time" className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" defaultValue="sort-time" />
          <label className="trip-sort__btn" htmlFor="sort-time">
            Time
            <svg className="trip-sort__direction-icon" width={8} height={10} viewBox="0 0 8 10">
              <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z" />
            </svg>
          </label>
        </div>
        <div className="trip-sort__item  trip-sort__item--price">
          <input onClick={() => onSortItemClick(SortingTypes.PRICE)} id="sort-price" className="trip-sort__input  visually-hidden" type="radio" name="trip-sort" defaultValue="sort-price" />
          <label className="trip-sort__btn" htmlFor="sort-price">
            Price
            <svg className="trip-sort__direction-icon" width={8} height={10} viewBox="0 0 8 10">
              <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z" />
            </svg>
          </label>
        </div>
        <span className="trip-sort__item  trip-sort__item--offers">Offers</span>
      </form>
    );
  }
}

Sort.propTypes = {
  onSortItemClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: getSortType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSortItemClick: (sortType) => dispatch(ActionCreator.changeSort(sortType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
