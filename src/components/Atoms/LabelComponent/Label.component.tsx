import React from 'react';
import { LabelHTMLAttributes } from 'react';

// Define el componente con React.memo
const Label: React.FC<LabelHTMLAttributes<HTMLLabelElement>> = React.memo(({ htmlFor, children, ...props }) => {
    return (
        <label htmlFor={htmlFor} {...props}>
            {children}
        </label>
    );
});

export default Label;
