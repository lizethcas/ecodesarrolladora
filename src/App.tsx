import { useEffect, useState } from "react";
import Button from "./components/Atoms/ButtonComponent/Button.component";
import axios from "axios";

interface UserCredentials {
  username: string;
  email: string;
  password: string;
}

interface ApiResponse {
  // Define aquí la estructura de la respuesta que esperas de la API
  message: string;
  data: string; // Cambia 'string' por el tipo específico si conoces la estructura exacta
}

function App() {
  // Estado para almacenar los datos de la API y errores
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Credenciales de ejemplo para el login
  const userCredentials: UserCredentials = {
    username: "johndoe",
    email: "johndoe@example.com",
    password: "securepassword123",
  };

  // useEffect para llamar a la API cuando se carga el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realiza la solicitud POST a la API usando las credenciales de usuario
        const response = await axios.post<ApiResponse>(
          "http://localhost:8000/api/signin/", // URL de tu API
          userCredentials, // Enviar las credenciales
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Coliving creado:", response.data);
        setData(response.data);
        setError(null); // Limpiar errores si la solicitud es exitosa
      } catch (error: any) {
        setData(null);
        setError(
          error.response?.data?.message || "Error al conectar con la API"
        );
        console.log(error)
        console.log(error.response.data)
      }
    };

    // Llamada a la función fetchData
    fetchData();
  }, []); // Array vacío para ejecutar solo una vez al montar el componente

  return (
    <>
      <h1 className="text-3xl">Titulo</h1>
      <Button
        type="primary"
        text="boton"
        onClick={() => {
          alert("button clicked");
        }}
      />

      {/* Mostrar los datos de la API si están disponibles */}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Cargando datos...</p>
      )}
    </>
  );
}

export default App;
