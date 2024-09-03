import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { NavBarResponsive } from "./NavBarResponsive";

export const NavBarView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold cursor-pointer">Nombre</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link to="/">
                <li className="hover:text-fuchsia-600 border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Inicio
                </li>
              </Link>
              <Link to="/properties">
                <li className="hover:text-fuchsia-600 border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Propiedades
                </li>
              </Link>
              <Link to="/blog">
                <li className="hover:text-fuchsia-600 border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Blog
                </li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-fuchsia-600 border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Contacto
                </li>
              </Link>
              <Link to="/aboutus">
                <li className="hover:text-fuchsia-600 border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Sobre Nosotros
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Responsive view */}
        <div>{isOpen && <NavBarResponsive />}</div>

        <button className="block sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <IoMenuSharp />}
        </button>
      </div>
    </nav>
  );
};
