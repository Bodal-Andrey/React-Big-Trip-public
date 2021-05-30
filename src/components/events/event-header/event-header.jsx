import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import EventTypeGroup from "../event-type-group/event-type-group.jsx";
import {eventActions} from "../../../const.js";
import {Operation} from "../../../reducer/events/events.js";

const LEGEND_NAME = {
  transfer: `Transfer`,
  activity: `Activity`
};

class EventHeader extends React.Component {

  onTripTypeChange = (evt) => {
    this.props.onChangeType(evt.target.defaultValue);
  };

  onCityChange = (evt) => {
    this.props.onChangeCity(evt.target.value);
  };

  render() {
    const {event, city, onReplace, onEventDelete, onUpdateFavorite, type, initialDate, finalDate, onChangeDate} = this.props;
    const {price, id} = event;

    return (
      <header className="event__header">
        <div className="event__type-wrapper">
          <label className="event__type  event__type-btn" htmlFor="event-type-toggle-1">
            <span className="visually-hidden">Choose event type</span>
            <img className="event__type-icon" width={17} height={17} src={`img/icons/${type}.png`} alt="Event type icon" />
          </label>
          <input className="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox" />
          <div className="event__type-list">
            <EventTypeGroup onChange={this.onTripTypeChange} type={type} legendName={LEGEND_NAME.transfer} />
            <EventTypeGroup onChange={this.onTripTypeChange} type={type} legendName={LEGEND_NAME.activity} />
          </div>
        </div>
        <div className="event__field-group  event__field-group--destination">
          <label className="event__label  event__type-output" htmlFor="event-destination-1">
            {type} {eventActions[type]}
          </label>
          <input
            className="event__input  event__input--destination"
            id="event-destination-1"
            type="text" name="event-destination"
            defaultValue={city}
            list="destination-list-1"
            onChange={this.onCityChange}
            />
          <datalist id="destination-list-1">
            <option value="Amsterdam" />
            <option value="Geneva" />
            <option value="Chamonix" />
            <option value="Saint Petersburg" />
          </datalist>
        </div>
        <div className="event__field-group  event__field-group--time">
          <label className="visually-hidden" htmlFor="event-start-time-1">
                From
          </label>
          <Flatpickr
          data-enable-time
          value={initialDate}
          onChange={() => onChangeDate(initialDate)}
           className="event__input  event__input--time"
           id="event-start-time-1"
           />
              —
          <label className="visually-hidden" htmlFor="event-end-time-1">
                To
          </label>
          <Flatpickr
          data-enable-time
          value={finalDate}
          onChange={() => onChangeDate(finalDate)}
           className="event__input  event__input--time"
           id="event-end-time-1"
           />
        </div>
        <div className="event__field-group  event__field-group--price">
          <label className="event__label" htmlFor="event-price-1">
            <span className="visually-hidden">Price</span>
                €
          </label>
          <input className="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value={price} />
        </div>
        <button className="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button onClick={() => onEventDelete(id)} className="event__reset-btn" type="reset">Delete</button>
        <input onChange={() => onUpdateFavorite(id)}
          id="event-favorite-1"
          className="event__favorite-checkbox  visually-hidden"
          type="checkbox"
          name="event-favorite"
        />
        <label className="event__favorite-btn" htmlFor="event-favorite-1">
          <span className="visually-hidden">Add to favorite</span>
          <svg className="event__favorite-icon" width={28} height={28} viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
          </svg>
        </label>
        <button onClick={onReplace} className="event__rollup-btn" type="button">
          <span className="visually-hidden">Open event</span>
        </button>
      </header>
    );
  }
}

EventHeader.propTypes = {
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
  }),
  onReplace: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onEventDelete: (eventId) => dispatch(Operation.deleteEvent(eventId)),
  onUpdateFavorite: (eventId) => dispatch(Operation.updateFavorite(eventId)),

});

export default connect(null, mapDispatchToProps)(EventHeader);
