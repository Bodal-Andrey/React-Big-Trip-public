import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Sort from "../sort/sort.jsx";
import DaysList from "../days-list/days-list.jsx";
import AddEventEdit from '../add-event/add-event-edit/add-event-edit.jsx';
import {getIsAddEvent} from "../../reducer/add-event/selectors.js";

class Main extends React.Component {
  render() {

    return (
      <main className="page-body__page-main  page-main">
        <div className="page-body__container">
          <section className="trip-events">
            <Sort />
            {this.props.isAddEvent && <AddEventEdit />}
            <DaysList />
          </section>
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  isAddEvent: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAddEvent: getIsAddEvent(state),
});

export default connect(mapStateToProps)(Main);
