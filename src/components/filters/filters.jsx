import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {FilterTypes} from "../../const.js";
import {ActionCreator} from "../../reducer/events/events.js";
import {getFilterType} from "../../reducer/events/selectors.js";
class Filters extends React.Component {
  render() {
    const {onFilterItemClick, filterType} = this.props;

    return (
      <React.Fragment>
        <h2 className="visually-hidden">Filter events</h2>
        <form className="trip-filters" action="#" method="get">
          <div className="trip-filters__filter">
            <input
              onClick={() => onFilterItemClick(FilterTypes.EVERYTHING)}
              id="filter-everything"
              className="trip-filters__filter-input  visually-hidden"
              type="radio" name="trip-filter" defaultValue="everything"
              checked={filterType === FilterTypes.EVERYTHING ? `checked` : ``}
            />
            <label className="trip-filters__filter-label" htmlFor="filter-everything">Everything</label>
          </div>
          <div className="trip-filters__filter">
            <input
              onClick={() => onFilterItemClick(FilterTypes.FUTURE)}
              id="filter-future"
              className="trip-filters__filter-input  visually-hidden"
              type="radio" name="trip-filter"
              defaultValue="future"
            />
            <label className="trip-filters__filter-label" htmlFor="filter-future">Future</label>
          </div>
          <div className="trip-filters__filter">
            <input
              onClick={() => onFilterItemClick(FilterTypes.PAST)}
              id="filter-past"
              className="trip-filters__filter-input  visually-hidden"
              type="radio"
              name="trip-filter"
              defaultValue="past"
            />
            <label className="trip-filters__filter-label" htmlFor="filter-past">Past</label>
          </div>
          <button className="visually-hidden" type="submit">Accept filter</button>
        </form>
      </React.Fragment>
    );
  }
}

Filters.propTypes = {
  onFilterItemClick: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  filterType: getFilterType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterItemClick: (filterType) => dispatch(ActionCreator.changeFilter(filterType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
