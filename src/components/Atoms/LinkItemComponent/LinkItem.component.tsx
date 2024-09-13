
// ./components/atoms/LinkItem.js
import { NavLink } from "../../../interfaces/Interfaces";
import { Link } from 'react-router-dom';



const LinkItem: React.FC<NavLink> = ({ to, children, label }) => {
    return (
        <li>
            <Link to={to}>{label || children}</Link>
        </li>
    );
}

export default LinkItem;
