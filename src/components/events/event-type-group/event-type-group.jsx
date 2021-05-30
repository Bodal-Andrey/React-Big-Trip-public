import React from "react";
import PropTypes from "prop-types";
import EventTypeItem from "../event-type-item/event-type-item.jsx";
import {typeNames} from "../../../mock/cards.js";

const EventTypeGroup = (props) => {
  const {type, legendName, onChange} = props;

  return (
    <fieldset className="event__type-group">
      <legend className="visually-hidden">{legendName}</legend>
      {typeNames[legendName].map((typeName) =>
        <EventTypeItem
          onChange={onChange}
          key={typeName}
          type={type}
          typeName={typeName}
        />)}
    </fieldset>
  );
};

EventTypeGroup.propTypes = {
  type: PropTypes.string.isRequired,
  legendName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EventTypeGroup;
