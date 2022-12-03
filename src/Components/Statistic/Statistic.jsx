import React from "react";
import CountUp from "react-countup";

const Statistic = ({ count, text }) => {
  return (
    <div className="stat bg-white shadow p-4 text-center rounded">
      <span className="number display-4 fw-bold">
        <CountUp start={0} end={count} enableScrollSpy={true} />+
      </span>
      <div className="text-muted">{text}</div>
    </div>
  );
};

export default Statistic;
