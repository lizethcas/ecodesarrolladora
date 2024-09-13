import Input from "../../Atoms/inputComponent/Input.component";
import Form from "../FormComponent/Form.Component";
import Button from "../../Atoms/ButtonComponent/Button.component";
import { staticTextsForm } from "../../../Pages/common/LoginPage/Login.texts";
import { FormProps } from "../../../interfaces/Interfaces";

const LoginForm = ({ children, onSubmit }: FormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      {children}
      <Input
        name="email"
        type="email"
        onChange={(e) => console.log(e.target.value)}
        placeholder={staticTextsForm.emailPlaceholder}
        required
      />

      <Input
        name="password"
        type="password"
        onChange={(e) => console.log(e.target.value)}
        placeholder={staticTextsForm.passwordPlaceholder}
        required
      />

      <Button
        type="primary"
        htmlType="submit"
        text={staticTextsForm.loginButton}
      />
    </Form>
  );
};

export default LoginForm;
