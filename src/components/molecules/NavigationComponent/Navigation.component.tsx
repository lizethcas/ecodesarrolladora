import React from 'react';
import LinkItem from "../../Atoms/LinkComponent/Link.component";
import { NavLinkProps } from "../../../interfaces/Interfaces";


const Navigation: React.FC<NavLinkProps> = ({ links, children, ulClassName,navClassName }) => {
    return (
        <nav className={navClassName}>
            {children}
            <ul className={ulClassName}>
                {links.map((link, index) => (
                    <li key={index}>
                        <LinkItem to={link.to} label={link.label} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
