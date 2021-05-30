import React from "react";

class Statistics extends React.Component {
  render() {
    return (
      <section className="statistics">
        <h2 className="visually-hidden">Trip statistics</h2>
        <div className="statistics__item statistics__item--money">
          <canvas className="statistics__chart  statistics__chart--money" width={900} />
        </div>
        <div className="statistics__item statistics__item--transport">
          <canvas className="statistics__chart  statistics__chart--transport" width={900} />
        </div>
        <div className="statistics__item statistics__item--time-spend">
          <canvas className="statistics__chart  statistics__chart--time" width={900} />
        </div>
      </section>
    );
  }
}

export default Statistics;
