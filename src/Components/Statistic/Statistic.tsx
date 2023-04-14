import CountUp from "react-countup";

type Props = {
  count: number;
  text: String;
};

const Statistic = ({ count, text }: Props) => {
  return (
    <div className="stat bg-white shadow p-4 text-center rounded">
      <CountUp start={0} end={count} suffix="+" enableScrollSpy={true}>
        {({ countUpRef }) => (
          <span ref={countUpRef} className="number display-4 fw-bold" />
        )}
      </CountUp>
      <div className="text-muted">{text}</div>
    </div>
  );
};

export default Statistic;
