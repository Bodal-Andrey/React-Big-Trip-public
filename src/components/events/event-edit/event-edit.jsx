import React from "react";
import PropTypes from "prop-types";
import OffersList from "../../offers-list/offers-list.jsx";
import Destination from "../../destination/destination.jsx";
import EventHeader from "../event-header/event-header.jsx";

class EventEdit extends React.Component {
  render() {
    const {event, onReplace, serverOffers, onChangeType, onChangeCity, type, description, photos, city, eventOffers, onChangeOffers, initialDate, finalDate, onChangeDate} = this.props;

    const {offers} = serverOffers.find((item) => item.type === type);

    return (
      <form className="trip-events__item  event  event--edit" action="#" method="post">
        <EventHeader
          onChangeType={onChangeType}
          onChangeCity={onChangeCity}
          onChangeDate={onChangeDate}
          onReplace={() => onReplace(`event`)}
          event={event}
          city={city}
          type={type}
          initialDate={initialDate}
          finalDate={finalDate}
        />
        <section className="event__details">
          {offers && <OffersList
            eventOffers={eventOffers}
            offers={offers}
            onChangeOffers={onChangeOffers}
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

EventEdit.defaultProps = {
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
  onReplace: () => {}
};

EventEdit.propTypes = {
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
  onChangeType: PropTypes.func.isRequired,
  onReplace: PropTypes.func.isRequired,
  serverOffers: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  eventOffers: PropTypes.array.isRequired,
  onChangeOffers: PropTypes.func.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  onChangeDate: PropTypes.func.isRequired,
  description: PropTypes.string,
  photos: PropTypes.array,
  city: PropTypes.string.isRequired,
  initialDate: PropTypes.number.isRequired,
  finalDate: PropTypes.number.isRequired,
};

export default EventEdit;
