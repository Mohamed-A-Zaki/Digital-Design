import React from "react";
import CountUp from "react-countup";

const Statistic = ({ count, text }) => {
  return (
    <div className="stat bg-white shadow p-4 text-center rounded">
      <CountUp start={0} end={count} enableScrollSpy={true}>
        {({ countUpRef }) => (
          <div className="number display-4 fw-bold">
            <span ref={countUpRef} />+
          </div>
        )}
      </CountUp>
      <div className="text-muted">{text}</div>
    </div>
  );
};

export default Statistic;
