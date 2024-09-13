// src/components/atoms/Icon.tsx
import React from 'react';
import { MdDirectionsWalk, MdHome, MdSettings } from 'react-icons/md';
import { IconType } from 'react-icons';

// Define el tipo para los nombres de iconos válidos
type IconName = 'MdDirectionsWalk' | 'MdHome' | 'MdSettings';

// Define el tipo para el objeto de iconos
const iconComponents: Record<IconName, IconType> = {
    MdDirectionsWalk,
    MdHome,
    MdSettings,
};

interface IconProps {
    name: IconName;
    size?: number;
    color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 30, color = "currentColor" }) => {
    const IconComponent = iconComponents[name];
    if (!IconComponent) {
        console.error(`Icon "${name}" does not exist.`);
        return null;
    }
    return <IconComponent size={size} color={color} />;
};

export default Icon;
