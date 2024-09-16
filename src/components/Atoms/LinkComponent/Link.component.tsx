import { Link, LinkProps as RouterLinkProps } from 'react-router-dom';
import { linkProps } from '../../../interfaces/Interfaces';

const LinkItem = ({ to, label, className, ...rest }: linkProps & Omit<RouterLinkProps, 'to'>) => {




    return (
        <Link
            to={to}
            className={`relative inline-block transition-all duration-300
                       border-b-2 border-transparent
                       hover:border-[#d4eea8] focus:border-[#d4eea8]
          
            ${className}`}
            {...rest}
        >
            {label}
        </Link>
    );
};

export default LinkItem;
