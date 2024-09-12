import classNames from "classnames";

interface ButtonProps {
  /** Text to be displayed inside the button */
  text: string;

  /** Defines the button type and its styling */
  type: "primary" | "secondary" | "ghost";

  /** Optional click handler */
  onClick: () => void;
}

/** Button component for user interaction */
const Button = ({ text, type, onClick }: ButtonProps) => {
  const baseClassNames =
    "px-4 py-2 rounded cursor-pointer  hover:shadow-accent-600 active:shadow-inset-accent-600";

  const buttonClassNames = classNames({
    "bg-accent text-foireground": type === "primary",
    " text-accent outline ": type === "secondary",
    "text-accent underline-offset-4 ": type === "ghost",
    // Puedes agregar una clase personalizada si el tipo es una cadena arbitraria
    [baseClassNames]:
      type === "primary" || type === "secondary" || type === "ghost",
  });
  return (
    <button className={buttonClassNames} onClick={onClick}>
      {text || "text default"}
    </button>
  );
};

export default Button;
