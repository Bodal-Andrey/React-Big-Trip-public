import React from "react";
import PropTypes from "prop-types";

class Offer extends React.Component {

  render() {
    const {offer: {title, price}, onChangeOffers, checked} = this.props;

    return (
      <div className="event__offer-selector">
        <input
          className="event__offer-checkbox  visually-hidden"
          id={`event-offer-${title}-1`}
          type="checkbox"
          name={`event-offer-${title}`}
          checked={checked ? true : false}
          onChange={() => onChangeOffers(title)}
        />
        <label className="event__offer-label" htmlFor={`event-offer-${title}-1`}>
          <span className="event__offer-title">{title}</span>
                    +
                    €&nbsp;<span className="event__offer-price">{price}</span>
        </label>
      </div>
    );
  }
}

Offer.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  onChangeOffers: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};

export default Offer;
