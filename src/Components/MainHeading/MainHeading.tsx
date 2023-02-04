import "./MainHeading.scss";

type Props = {
  className?: "special" | "dark-border" | "special dark-border" | "";
  children: string;
};

const MainHeading = ({ className = "", children }: Props) => {
  return (
    <span
      className={`${className} main-heading text-uppercase fw-bold fs-5 pb-3 d-inline-block position-relative`}
    >
      {children}
    </span>
  );
};

export default MainHeading;
