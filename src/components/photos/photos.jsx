import React from "react";
import PropTypes from "prop-types";

const Photos = ({photos}) => {
  return (
    <div className="event__photos-tape">
      {photos.map((photo) =>
        <img key={Math.random() + photo} className="event__photo" src={photo.src} alt="Event photo" />
      )}
    </div>
  );
};

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default Photos;
