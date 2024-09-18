import { InputAtomProps } from "../../../components/Atoms/LabelComponent/Input.component.prueba";

export const inputText:InputAtomProps = {
  placeholder: "correo@ejemplo.com",
  type: "date",
  required: true,
  autoComplete: "email",
  
  iconStyles: { color: "gray", size: 20 }
}

export const staticTextsForm = {
  emailPlaceholder: "Email",
  passwordPlaceholder: "Contraseña",
  phonePlaceholder: "300 123 4442",
  loginButton: "Iniciar sesión",
  validationError: "Por favor, complete todos los campos correctamente.",
  userNotFoundError:
    "El correo electrónico no está registrado. Regístrate ahora.",
  invalidCredentialsError: "Correo o contraseña inválidos.",
};

export const staticTextsQuestionsForm = {
  // Textos para el primer inicio de sesión
  question1: {
    prompt: "¿Estás buscando vender o transitar al campo?",
    options: {
      sell: "Vender",
      buy: "Comprar",
      bioconstruct: "Bioconstruir vivienda",
      learn: "Conocer más de Mtc",
    },
  },
  question2: {
    prompt: "¿Cómo crees que podemos ayudarte?",
    placeholder: "Escribe tu respuesta aquí...",
  },
  question3: {
    prompt: "¿Cuál es tu número de contacto?",
    placeholder: "Número de teléfono con prefijo de país",
  },
  backButton: "Atrás",
  nextButton: "Siguiente",
  submitButton: "Enviar",
};
