import { Link, LinkProps as RouterLinkProps } from 'react-router-dom';
import { linkProps } from '../../../interfaces/Interfaces';

const LinkItem = ({ to, label, className, ...rest }: linkProps & Omit<RouterLinkProps, 'to'>) => {




    return (
        <Link
            to={to}
            className={`     
            ${className}`}
            {...rest}
        >
            {label}
        </Link>
    );
};

export default LinkItem;
