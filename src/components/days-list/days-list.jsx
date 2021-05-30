import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Day from "../day/day.jsx";
import {SortingTypes} from "../../const.js";
import {getSortType, getSortedFilteredEvents} from "../../reducer/events/selectors.js";

class DaysList extends React.Component {
  state = {
    showId: null
  };

  changeShowId = (showId) => {
    this.setState({
      showId
    });
  };

  render() {
    const {sortType, sortedEvents} = this.props;
    const dates = [...new Set(sortedEvents.map((event) => new Date(event.startDate).toDateString()))];

    if (sortType === SortingTypes.EVENT) {
      return (
        <ul className="trip-days">
          {dates.map((date, index) => {
            const eventsOfDay = sortedEvents.filter((event) => new Date(event.startDate).toDateString() === date);
            return (
              <Day
                key={date}
                events={eventsOfDay}
                date={date}
                index={index}
                showId={this.state.showId}
                onChangeShowId={this.changeShowId}
              />
            );
          })}
        </ul>
      );
    } else {
      return (
        <ul className="trip-days">
              <Day
                events={sortedEvents}
                date={null}
                index={null}
                showId={this.state.showId}
                onChangeShowId={this.changeShowId}
              />
        </ul>
      );
    }
  }
};

DaysList.propTypes = {
  sortedEvents: PropTypes.arrayOf(
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
};

const mapStateToProps = (state) => ({
  sortType: getSortType(state),
  sortedEvents: getSortedFilteredEvents(state)
});

export default connect(mapStateToProps)(DaysList);
