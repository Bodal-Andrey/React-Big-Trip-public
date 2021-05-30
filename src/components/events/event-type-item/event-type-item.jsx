import React from "react";
import PropTypes from "prop-types";

class EventTypeItem extends React.Component {

  render() {
    const {type, typeName, onChange} = this.props;

    return (
      <div className="event__type-item">
        <input
          onChange={onChange}
          checked={type === typeName ? true : false}
          id={`event-type-${typeName}-1`}
          className="event__type-input  visually-hidden"
          type="radio"
          name="event-type"
          defaultValue={typeName}
        />
        <label
          className={`event__type-label  event__type-label--${typeName}`}
          htmlFor={`event-type-${typeName}-1`}>
          {typeName}
        </label>
      </div>
    );
  }
}

EventTypeItem.propTypes = {
  type: PropTypes.string.isRequired,
  typeName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EventTypeItem;
