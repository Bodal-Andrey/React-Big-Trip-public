import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Event from "../event/event.jsx";
import EventEdit from "../event-edit/event-edit.jsx";
import {getDestinations, getOffers} from "../../../reducer/events/selectors.js";

class EventItem extends React.Component {
  state = {
    activeComponent: `event`,
    type: this.props.event.type,
    offers: this.props.event.offers,
    description: this.props.event.description,
    photos: this.props.event.photos,
    city: this.props.event.city,
    initialDate: this.props.event.startDate,
    finalDate: this.props.event.endDate,
  };

  onReplace = (activeComponent) => {
    const {event: {id}, onChangeShowId} = this.props;
    this.setState({activeComponent});
    onChangeShowId(id);
  };

  onChangeType = (type) => {
    this.setState({
      type,
      offers: []
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

  onChangeDate = (data) => {
    this.setState({data});
  };

  render() {
    const {event, showId, serverOffers} = this.props;
    const {activeComponent, type, description, photos, city, offers: stateOffers, initialDate, finalDate} = this.state;

    return (
      <li className="trip-events__item">
       {showId === event.id && activeComponent === `eventEdit` ?
       <EventEdit
        onChangeType={this.onChangeType}
        onChangeCity={this.onChangeCity}
        onChangeDate={this.onChangeDate}
        onChangeOffers={this.onChangeOffers}
        onReplace={this.onReplace}
        event={event}
        type={type}
        description={description}
        photos={photos}
        city={city}
        eventOffers={stateOffers}
        serverOffers={serverOffers}
        initialDate={initialDate}
        finalDate={finalDate}
        /> :
       <Event
         onReplace={this.onReplace}
         event={event}
        />}
      </li>
    );
  }
}

EventItem.propTypes = {
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
};

const mapStateToProps = (state) => ({
  serverOffers: getOffers(state),
  destinations: getDestinations(state),
});


export default connect(mapStateToProps)(EventItem);
