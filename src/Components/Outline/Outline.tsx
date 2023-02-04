import "./Outline.scss";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Outline = ({ className = "", children }: Props) => {
  return <div className={`outline rounded ${className}`}>{children}</div>;
};

export default Outline;
