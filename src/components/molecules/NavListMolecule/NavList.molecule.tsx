import React from 'react';
import LinkItem from '../../Atoms/LinkItemComponent/LinkItem.component';
import { NavListProps } from '../../../interfaces/Interfaces';

const NavListMolecule: React.FC<NavListProps> = ({ links }) => (
    <ul className='flex'>
        {links.map((link, index) => (
            <LinkItem key={index} to={link.to} label={link.label}>
                {link.label}
            </LinkItem>
        ))}
    </ul>
);

export default NavListMolecule;
