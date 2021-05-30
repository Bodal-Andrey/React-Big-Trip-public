import React from "react";
import PropTypes from "prop-types";
import EventItem from "../event-item/event-item.jsx";

class EventsList extends React.Component {
  render() {
    const {events, onChangeShowId, showId} = this.props;

    return (
      <ul className="trip-events__list">
        {events.map((event) => {
          return (
            <EventItem
              key={event.id}
              event={event}
              showId={showId}
              onChangeShowId={onChangeShowId}
            />
          );
        })}
      </ul>
    );
  }
}

EventsList.propTypes = {
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
  showId: PropTypes.string,
  onChangeShowId: PropTypes.func.isRequired,
};

export default EventsList;
