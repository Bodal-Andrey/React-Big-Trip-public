import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";
import withLoad from "../hocs/withLoad.jsx";
import {getEvents, getLoadStatus} from "../../reducer/events/selectors.js";

const App = ({events}) => {
  return (
    <React.Fragment>
      <Header events={events} />
      <Main />
    </React.Fragment>
  );
};

App.propTypes = {
  events: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
  ),
};

const mapStateToProps = (state) => ({
  events: getEvents(state),
  loadStatus: getLoadStatus(state),
});

export default connect(mapStateToProps)(withLoad(App));
