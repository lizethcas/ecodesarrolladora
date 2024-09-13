import { ButtonHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';

// Tipos de botones y tamaños
/* type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';
 */
// Definición de los props del botón
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Text to be displayed inside the button */
    label?: string;
    /** Defines the button icon */
    icon?: React.ReactNode;
    /** Defines the button type and its styling */
    variant?: 'primary' | 'secondary' | 'ghost';
    /** Defines the button size */
    size?: 's' | 'm' | 'l';
    className?: string;
}

/** Button component for user interaction */
const Button: FC<ButtonProps> = ({
    label,
    icon,
    variant = 'primary',
    size = 'm',
    className,
    ...props
}) => {
    // Estilos por variante
    const variantClasses = {
        primary: 'border border-accent1000 bg-gradient-to-t from-accent600 hover:from-accent800 to-accent800 hover:to-accent600 hover:shadow-opacity30-black active:shadow-opacity25-black rounded-2xl  text-center text-foireground text-white 	',
        secondary: 'text-accent700 rounded-2xl border-accent700 border-[1.5px]',
        ghost: 'bg-transparent text-blue-500 hover:bg-blue-50',
    };

    // Estilos por tamaños
    const sizeClasses = {
        s: 'p-1 w-2/4',
        m: 'sm:p-[10px] py-[6px] px-[10px]',
        l: ' p-[10px] w-full ',
    };

    // Combina las clases con tailwind-merge
    const mergedClasses = twMerge(
        `text-center font-medium ${variantClasses[variant]} ${sizeClasses[size]} `,
        className
    );

    return (
        <button className={mergedClasses} {...props}>
            {icon && <span className="flex items-center">{icon}</span>}
            {label}
        </button>
    );
};

export default Button