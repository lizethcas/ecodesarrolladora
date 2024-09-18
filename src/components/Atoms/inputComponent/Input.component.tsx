import React, { useState, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { iconsLibrary } from '../../IconLibrary/IconLibrary';
import { IconBaseProps } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  state?: 'success' | 'fail';
  label?: string;
  icon?: keyof typeof iconsLibrary;
  iconStyles?: IconBaseProps;
  className?: string;
  showPassword?: boolean;
}

const variantClassesInput = {
  success: 'focus:border-accent700',
  fail: 'focus:border-red-700',
};

const variantClassesLabel = {
  success: 'peer-focus:text-accent700',
  fail: 'peer-focus:text-red-700',
};

const Input: React.FC<InputProps> = ({
  state = 'success',
  label,
  id,
  className,
  showPassword = false,
  type = 'text',
  icon,
  iconStyles,
  ...restProps
}) => {
  const [showPass, setShowPass] = useState(showPassword);

  const togglePasswordVisibility = () => {
    setShowPass((prevState) => !prevState);
  };

  const mergedClassesInput = twMerge(
    `block border-gray-300 placeholder-white focus:placeholder-[#71777d] text-textColor bg-transparent px-2.5 pt-4 pb-2.5 border-2 rounded-lg focus:ring-0 w-full text-sm appearance-none focus:outline-none peer ${variantClassesInput[state]}`,
    className
  );

  const labelClasses = twMerge(
    `top-2 peer-focus:top-2 peer-placeholder-shown:top-1/2 left-3 absolute border-accent700 bg-white px-2 peer-focus:px-2 text-[#71777D] text-sm transform origin-top-left transition-transform -translate-y-4 peer-focus:-translate-y-4 peer-placeholder-shown:-translate-y-1/2 duration-300 scale-75 peer-placeholder-shown:scale-100 peer-focus:scale-75`,
    type === 'text' || type === 'tel' || type === 'email' || type === 'password'
      ? variantClassesLabel[state]
      : 'text-textColor',
    className
  );

  const PasswordIconComponent = showPass ? iconsLibrary.EyeSlash : iconsLibrary.eye;
  const IconComponent = icon ? iconsLibrary[icon] : null;

  return (
    <div className="relative">
      <input
        id={id}
        type={showPassword ? (showPass ? 'password' : 'text') : type}
        {...restProps} // Propaga todas las propiedades de forma directa
        className={mergedClassesInput}
      />
      {label && <label htmlFor={id} className={labelClasses}>{label}</label>}
      {showPassword ? (
        <span
          onClick={togglePasswordVisibility}
          className="right-0 absolute inset-y-0 flex items-center px-3 py-1 cursor-pointer"
        >
          <PasswordIconComponent aria-label={label} {...iconStyles} />
        </span>
      ) : (IconComponent && (
        <span className="right-0 absolute inset-y-0 flex items-center px-3 py-1">
          <IconComponent aria-label={label} {...iconStyles} />
        </span>
      ))}
    </div>
  );
};

export default Input;
