import { useState } from "react";

export const Registration = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOpening = (e) => {
    e.preventDefault();

    setIsOpen(!isOpen);
  };

  const handleSelectedOption = (e) => {
    e.preventDefault();

    setSelectedOption(e.target.value);

    console.log(e.target.value);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Registro</h1>
      <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Correo electrónico
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="email"
            id="email"
            name="email"
            placeholder="ejemplo@dominio.com"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="password"
            name="password"
            placeholder="********"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirmar contraseña
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="********"
          />
        </div>
        <div className="mb-4">
          <label>Teléfono</label>
          <input
            id="contactNumber"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="e.g., +1 123-456-7890"
            pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
            maxLength={16}
          />
        </div>
        <div className="mb-4">
          <div className="relative">
            {isOpen && (
              <div>
                <label
                  onClick={handleOpening}
                  htmlFor="options"
                  className="block text-sm font-medium text-gray-700"
                >
                  Selecciona una opción:
                </label>
                <select
                  id="options"
                  value={selectedOption}
                  onChange={handleSelectedOption}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {/* <option value="">-- Elige una opción --</option> */}
                  <option value="buy">Comprar</option>
                  <option value="sell">Vender</option>
                  <option value="build">Construir</option>
                  <option value="blog">Blog</option>
                </select>

                <p className="mt-2 text-sm text-gray-600">
                  Opción seleccionada: {selectedOption}
                </p>
              </div>
            )}
          </div>
        </div>
        <button
          className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600"
          type="submit"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};
