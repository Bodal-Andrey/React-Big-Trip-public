import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import EventTypeGroup from "../../events/event-type-group/event-type-group.jsx";
import { eventActions } from "../../../const.js";
import { ActionCreator as AddEventActionCreator } from "../../../reducer/add-event/add-event.js";

const LEGEND_NAME = {
  transfer: `Transfer`,
  activity: `Activity`
};

class AddEventHeader extends React.Component {

  onTripTypeChange = (evt) => {
    this.props.onChangeType(evt.target.defaultValue);
  };

  onCityChange = (evt) => {
    this.props.onChangeCity(evt.target.value);
  };

  onPriceChange = (evt) => {
    this.props.onChangePrice(evt.target.value);
  };

  render() {
    const { type, city, onCancelClick, onChangeDate, initialDate, finalDate, price } = this.props;

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
            type="text"
            name="event-destination"
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
          <input
            className="event__input  event__input--price"
            id="event-price-1"
            type="text"
            name="event-price"
            value={price}
            onChange={this.onPriceChange}
          />
        </div>
        <button className="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button onClick={() => onCancelClick()} className="event__reset-btn" type="reset">Cancel</button>
      </header>
    );
  }
}

AddEventHeader.propTypes = {
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
};

const mapDispatchToProps = (dispatch) => ({
  onCancelClick: () => dispatch(AddEventActionCreator.changeAddStatus()),
});

export default connect(null, mapDispatchToProps)(AddEventHeader);
