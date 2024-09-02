import { Link } from "react-router-dom";

export const NavBarResponsive = () => {
  return (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900">
      <ul className="text-center text-xl p-20">
        <Link to="/">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Inicio
          </li>
        </Link>
        <Link to="/properties">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Propiedades
          </li>
        </Link>
        <Link to="/blog">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Blog
          </li>
        </Link>
        <Link to="/contact">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Contacto
          </li>
        </Link>
        <Link to="/aboutus">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Sobre Nosotros
          </li>
        </Link>
      </ul>
    </div>
  );
};
