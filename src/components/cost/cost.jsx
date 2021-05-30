import React from "react";
import PropTypes from "prop-types";

const Cost = ({events}) => {
  const sumOfCosts = events.map((event) => event.price).reduce((sum, current) => sum + current, 0);

  return (
    <p className="trip-info__cost">
      Total: €&nbsp;<span className="trip-info__cost-value">
        {events.length > 0 ? sumOfCosts : 0}
      </span>
    </p>
  );
};

Cost.propTypes = {
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


export default Cost;
