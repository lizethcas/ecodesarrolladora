import { Link } from "react-router-dom";
import { linkProps } from "../../../interfaces/Interfaces";

const LinkItem = ({ to, label }: linkProps) => {
    return (
        <Link to={to}>
            {label}
        </Link>
    )
}

export default LinkItem