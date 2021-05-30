import React from "react";
import PropTypes from "prop-types";
import EventsList from "../events/events-list/events-list.jsx";

class Day extends React.Component {
  render() {
    const {events, date, index, onChangeShowId, showId} = this.props;
    const dateVariant = date ? date : ``;
    const indexVariant = index === null ? `` : index + 1;
    const dateItem = dateVariant.slice(4, 10);

    return (
      <li className="trip-days__item  day">
        <div className="day__info">
          <span className="day__counter">{indexVariant}</span>
          <time className="day__date" dateTime="2019-03-18">{dateItem}</time>
        </div>
        <EventsList
          events={events}
          showId={showId}
          onChangeShowId={onChangeShowId}
        />
      </li>
    );
  }
}

Day.propTypes = {
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
  date: PropTypes.string,
  index: PropTypes.number,
  showId: PropTypes.string,
  onChangeShowId: PropTypes.func.isRequired,
};

export default Day;
