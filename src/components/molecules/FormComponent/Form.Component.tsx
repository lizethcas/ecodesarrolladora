import { FormProps } from "../../../interfaces/Interfaces";

const Form = ({ children, onSubmit }: FormProps) => (
  <form onSubmit={onSubmit}>{children}</form>
);

export default Form;
