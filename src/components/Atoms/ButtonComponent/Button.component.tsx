import { ButtonHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { iconsLibrary } from '../../IconLibrary/IconLibrary';
import { IconBaseProps } from 'react-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Button name */
    label?: string;
    /** type of Button icon */
    icon?: keyof typeof iconsLibrary; // Usa los nombres personalizados como claves
    /** Icon size and color */
    iconStyles?: IconBaseProps; // Propiedades adicionales para el ícono
     /** Button Type */
    variant?: 'primary' | 'secondary' | 'ghost';
     /** Button Size */
    size?: 's' | 'm' | 'l';
    
    className?: string;
}

const Button: FC<ButtonProps> = ({
    icon,
    label,
    iconStyles, // Añadido para pasar props al ícono
    variant = 'primary',
    size = 'm',

    className,
    ...props
}) => {
    const variantClasses = {
        primary: 'border border-accent1000 bg-gradient-to-t from-accent600 hover:from-accent800 to-accent800 hover:to-accent600 rounded-2xl text-center text-foireground text-white',
        secondary: 'text-accent700 rounded-2xl border-accent700 border-[1.5px] bg-transparent hover:bg-gradient-to-t hover:from-accent600 hover:to-accent800 hover:text-white transition duration-300 ease-in-out',
        ghost: 'bg-transparent text-blue-500 hover:bg-blue-50',
    };

    const sizeClasses = {
        s: 'p-1 w-2/4',
        m: 'px-[10px] py-[7px]',
        l: 'p-[10px] w-full',
    };

    const IconComponent = icon ? iconsLibrary[icon] : null; // Mapea el nombre al componente de ícono


    const mergedClasses = twMerge(
        `text-center items-center  gap-2 font-medium flex space-between hover:shadow-opacity30-black active:shadow-opacity25-black ${variantClasses[variant]} ${sizeClasses[size]} `,
        className
    );

    return (
        <button className={mergedClasses} {...props}>
            {label}
            {IconComponent && <IconComponent {...iconStyles} />} {/* Renderiza el ícono con props */}
        </button>
    );
};

export default Button;
