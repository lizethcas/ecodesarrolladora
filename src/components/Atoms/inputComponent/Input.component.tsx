import { ChangeEventHandler } from "react";

export interface InputProps {
  /** The current value of the input */
  value?: string;

  /** Handler for change events on the input */
  onChange?: ChangeEventHandler<HTMLInputElement>;

  /** The type of input (e.g., text, number, password) */

  type: "text" | "email" | "password"|'checkbox'|'number' | 'reset' | 'search' | 'tel';

  /** Placeholder text displayed inside the input when empty */
  placeholder: string;

  /** Specifies whether the input is required */
  required: boolean;

  /** Name attribute for the input element */
  name?: string;

  /** Specifies whether the input is disabled */
  disabled?: boolean; 
}


/** Input component to forms */
const Input = ({
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  name,
  disabled = false,
}: InputProps) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        name={name}
        disabled={disabled}
      />
    </>
  );
};

export default Input;
