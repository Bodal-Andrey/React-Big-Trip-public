import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import AddOffersList from "../add-offers-list/add-offers-list.jsx";
import Destination from "../../destination/destination.jsx";
import AddEventHeader from "../add-event-header/add-event-header.jsx";
import {ActionCreator} from "../../../reducer/events/events.js";
import { getOffers, getDestinations } from "../../../reducer/events/selectors.js";

class AddEventEdit extends React.Component {
  state = {
    description: ``,
    photos: [],
    city: ``,
    initialDate: Date.now(),
    finalDate: Date.now(),
    type: `taxi`,
    offers: this.props.serverOffers.find((item) => item.type === `taxi`).offers,
    price: null,
  };

  onChangeType = (type) => {
    this.setState({
      type,
      offers: this.props.serverOffers.find((item) => item.type === type).offers,
    });
  };

  onChangeDate = (data) => {
    this.setState({data});
  };

  onChangePrice = (data) => {
    this.setState({
      price: data
    });
  };

  onChangeCity = (name) => {
    const {destinations} = this.props;

    let town;
    let descr;
    let pic;

    if (name === destinations.map((item) => item.city).find((item) => item === name)) {
      town = name;
      descr = destinations.find((item) => item.city === name).description;
      pic = destinations.find((item) => item.city === name).photos;
    } else {
      town = ``;
    }

    this.setState({
      city: town,
      description: descr,
      photos: pic,
    });
  };

  onChangeOffers = (name) => {
    const {serverOffers} = this.props;

    const customOffers = serverOffers.find((item) => item.type === this.state.type);

    const idx = this.state.offers.findIndex((item) => item.title === name);

    let offers; 

    if (idx) {
      offers = this.state.offers.filter((_, id) => {return id !== idx});
    } 
    if (idx === -1) {
      const offer = customOffers.offers.find((item) => item.title === name);
      offers = [...this.state.offers, offer];
    }
    this.setState({
      offers
    });
  };

  render() {
    const {onCreateEvent, serverOffers} = this.props;
    const {initialDate, finalDate, type, offers: stateOffers, description, city, photos, price} = this.state;
    const {offers} = serverOffers.find((item) => item.type === type);
console.log(price)
    return (
      <form onSubmit={() => onCreateEvent()} className="trip-events__item  event  event--edit" action="#" method="post">
        <AddEventHeader
          onChangeDate={this.onChangeDate}
          onChangeType={this.onChangeType}
          onChangeCity={this.onChangeCity}
          onChangePrice={this.onChangePrice}
          type={type}
          city={city}
          price={price}
          initialDate={initialDate}
          finalDate={finalDate}
        />
        <section className="event__details">
          {offers && <AddOffersList
          onChangeOffers={this.onChangeOffers}
          offers={offers}
          eventOffers={stateOffers}
          />}
          {description && <Destination
            description={description}
            photos={photos}
          />}
        </section>
      </form>
    );
  }
}

AddEventEdit.defaultProps = {
  event: {
    id: `0`,
    type: `taxi`,
    city: ``,
    startDate: 0,
    endDate: 0,
    price: 0,
    description: ``,
    offers: [],
    photos: [],
  },
};

AddEventEdit.propTypes = {
  onCreateEvent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  serverOffers: getOffers(state),
  destinations: getDestinations(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreateEvent: () => dispatch(ActionCreator.createEvent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEventEdit);
