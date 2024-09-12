// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../redux/reducers/authReducer";
// import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useState } from "react";

export const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const { loading, error } = useSelector((state) => state.user);

  // const HandleLogin = (e) => {
  //   e.preventDefault();

  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   const userCredentials = {
  //     email,
  //     password,
  //   };
  //   dispatch(loginUser(userCredentials)).then((result) => {
  //     if (result.payload) {
  //       setEmail("");
  //       setPassword("");
  //       navigate("/");
  //     }
  //   });

  //   console.log(userCredentials);
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Activar el estado de carga al iniciar el envío

    setTimeout(async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/signin/", {
          email,
          password,
        });
        console.log(response.data.message);
        // Aquí puedes manejar la navegación o cualquier acción posterior al inicio de sesión
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false); // Desactivar el estado de carga después de completar la solicitud
      }
    }, 2000);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChJMdz2OsGWinfICIUgteeDixE88izEnwGA&s"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Iniciar sesión
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Correo electrónico
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={loading}
            >
              {loading ? "Cargando" : "Iniciar Sesión"}
            </button>
            {/* {error && (
              <div className="text-color-red" role="alert">
                {error}
              </div>
            )} */}
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          ¿Aún no eres miembro?
          <a
            href="#"
            className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Registrarme
          </a>
        </p>
      </div>
    </div>
  );
};
