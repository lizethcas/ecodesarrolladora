import React from "react";
import { InputHTMLAttributes } from "react";
import { iconsLibrary } from '../../IconLibrary/IconLibrary';
import { IconBaseProps } from 'react-icons';
import { twMerge } from "tailwind-merge";

export interface InputAtomProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: keyof typeof iconsLibrary;  // Prop para pasar el ícono
  /** Icon size and color */
  iconStyles?: IconBaseProps;
  className?: string;

}

const inputFormStyles = 'block border-gray-300 placeholder-white focus:placeholder-[#71777d] text-textColor bg-transparent px-2.5 pt-4 pb-2.5 border-2 rounded-lg focus:ring-0 w-full text-sm appearance-none focus:outline-none peer focus:border-accent700'

const variantClassesInput: Record<string, string> = {
  text:  inputFormStyles,
  email: inputFormStyles,
  tel:  inputFormStyles,
  password: inputFormStyles,
  number:  inputFormStyles,
  search: 'focus:border-accent700',
  button: 'focus:border-accent700',
  checkbox: 'focus:border-accent700',
  color: 'focus:border-accent700',
  date:inputFormStyles,
  'datetime-local': 'focus:border-accent700',
  file: 'focus:border-accent700',
  range: 'focus:border-accent700',
  radio:'text-textColor'
};

const InputAtom: React.FC<InputAtomProps> = React.memo(({ iconStyles, icon, type = 'text', className, ...props }) => {
  // Verificar si el ícono es válido
  const IconComponent = icon && iconsLibrary[icon] ? iconsLibrary[icon] : null;

  // Obtener las clases para el tipo de input
  const variantClasses = variantClassesInput[type] || '';

  const mergedClassesInput = twMerge(
    ` ${variantClasses}`,
    className
  );

  return (
    <div className="relative w-full">
      <input
       type={type}
        className={mergedClassesInput}
        {...props}
      />
      {IconComponent && (
        <span className="right-0 absolute inset-y-0 flex items-center pr-3">
          <IconComponent {...iconStyles} /> {/* Renderizar el ícono si es válido */}
        </span>
      )}
    </div>
  );
});

export default InputAtom;
