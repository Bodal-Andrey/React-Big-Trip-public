import React from "react";
import PropTypes from "prop-types";
import Offer from "../../offer/offer.jsx";

const AddOffersList = ({offers, eventOffers, onChangeOffers}) => {

  return (
    <section className="event__section  event__section--offers">
      <h3 className="event__section-title  event__section-title--offers">Offers</h3>
      <div className="event__available-offers">
        {offers.map((offer) => {
          return eventOffers.find((item) => offer.title === item.title) ?
            <Offer
              key={offer.title}
              offer={offer}
              onChangeOffers={onChangeOffers}
              checked
            /> :
            <Offer
              key={offer.title}
              offer={offer}
              onChangeOffers={onChangeOffers}
            />;
        }
        )}
      </div>
    </section>
  );
};

AddOffersList.propTypes = {
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
  offers: PropTypes.array,
  eventOffers: PropTypes.array,
  type: PropTypes.string,
  onChangeOffers: PropTypes.func.isRequired,
};


export default AddOffersList;
