import "./ButtonComp.scss";

type Props = {
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const ButtonComp = ({ className = "", children, ...props }: Props) => {
  return (
    <button
      className={`btn-comp btn ${className} px-4 py-2 text-white fw-bold position-relative overflow-hidden`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonComp;
