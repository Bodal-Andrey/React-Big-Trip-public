import React from "react";
import PropTypes from "prop-types";
import Cost from "../cost/cost.jsx";

const Trip = ({events}) => {
  const newCards = events.sort((a, b) => a.startDate - b.startDate);
  const cities = events.sort((a, b) => a.startDate - b.startDate).map((event) => event.city);

  const startPoint = cities[0];
  const endPoint = cities[cities.length - 1];
  let intermediatePoint = cities[1];
  if (cities.length > 3) {
    intermediatePoint = `...`;
  }
  const startDay = new Date(newCards[0].startDate).toDateString().slice(4, 10);
  const endDay = new Date(newCards[newCards.length - 1].endDate).toDateString().slice(4, 10);

  return (
    <section className="trip-main__trip-info  trip-info">
      {events.length > 0 ?
        <div className="trip-info__main">
          <h1 className="trip-info__title">{startPoint} — {intermediatePoint} — {endPoint}</h1>
          <p className="trip-info__dates">{startDay}&nbsp;—&nbsp;{endDay}</p>
        </div> :
        <div className="trip-info__main"></div>
      }
      <Cost events={events} />
    </section>
  );
};

Trip.propTypes = {
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
};

export default Trip;
