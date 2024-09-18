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
                        <LinkItem to={link.to} label={link.label} className='inline-block relative hover:border-[#d4eea8] focus:border-[#d4eea8] border-transparent border-b-2 transition-all duration-300'/>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
