import React from "react";
import PropTypes from "prop-types";
import Photos from "../photos/photos.jsx";

const Destination = ({description, photos}) => {

  return (
    <section className="event__section  event__section--destination">
      <h3 className="event__section-title  event__section-title--destination">Destination</h3>
      <p className="event__destination-description">{description}.</p>
      <div className="event__photos-container">
        <Photos photos={photos} />
      </div>
    </section>
  );
};

Destination.propTypes = {
  description: PropTypes.string,
  photos: PropTypes.array,
};

export default Destination;
