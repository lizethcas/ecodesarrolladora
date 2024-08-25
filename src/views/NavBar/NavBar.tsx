import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        {/* Enlace al inicio */}
        <a href="/" className="px-4 py-2 hover:bg-gray-700 rounded">
          Inicio
        </a>

        <div className="flex items-center">
          {/* Opciones desplegables */}
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="px-4 py-2 hover:bg-gray-700 rounded">
              Opciones
            </button>
            {isOpen && (
              <div className="absolute py-2 w-48 bg-white text-black rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Opción 1
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Opción 2
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Opción 3
                </a>
              </div>
            )}
          </div>

          {/* Botones de sesión */}
          <button className="ml-4 px-4 py-2 hover:bg-gray-700 rounded">
            Iniciar sesión
          </button>
          <button className="ml-2 px-4 py-2 hover:bg-gray-700 rounded">
            Registrarse
          </button>
        </div>
      </div>
    </nav>
  );
};
