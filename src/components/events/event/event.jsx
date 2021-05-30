import React from "react";
import PropTypes from "prop-types";
import {formatTime, timeDifference} from "../../../utils/common.js";
import {eventActions} from "../../../const.js";

class Event extends React.Component {
  render() {
    const {event, onReplace} = this.props;
    const {city, price, offers, startDate, endDate, type} = event;
    const initialDate = formatTime(startDate);
    const finalDate = formatTime(endDate);
    const timeDiff = timeDifference(endDate, startDate);

    return (
      <div className="event">
        <div className="event__type">
          <img className="event__type-icon" width={42} height={42} src={`img/icons/${type}.png`} alt="Event type icon" />
        </div>
        <h3 className="event__title">{type} {eventActions[type]} {city}</h3>
        <div className="event__schedule">
          <p className="event__time">
            <time className="event__start-time" dateTime={`${initialDate}`}>{initialDate}</time>
            —
            <time className="event__end-time" dateTime={`${finalDate}`}>{finalDate}</time>
          </p>
          <p className="event__duration">{timeDiff}</p>
        </div>
        <p className="event__price">
          €&nbsp;<span className="event__price-value">{price}</span>
        </p>
        <h4 className="visually-hidden">Offers:</h4>
        <ul className="event__selected-offers">
          {offers.slice(0, 3).map((offer) => {
            return (
              <li key={offer.title} className="event__offer">
                <span className="event__offer-title">{offer.title}</span>
            +
            €&nbsp;<span className="event__offer-price">{offer.price}</span>
              </li>
            );
          })}
        </ul>
        <button onClick={() => onReplace(`eventEdit`)} className="event__rollup-btn" type="button">
          <span className="visually-hidden">Open event</span>
        </button>
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.shape({
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
  }),
  onReplace: PropTypes.func.isRequired,
};

export default Event;
