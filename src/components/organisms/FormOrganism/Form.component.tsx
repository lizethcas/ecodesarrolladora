import React, { useState, FormEvent } from 'react';
import Input from '../../Atoms/inputComponent/Input.component';
import Button from '../../Atoms/ButtonComponent/Button.component';
import { InputProps } from '../../Atoms/inputComponent/Input.component';
import { ButtonProps } from '../../Atoms/ButtonComponent/Button.component';

// Definir la configuración para cada campo de input
interface FieldConfig extends InputProps {
    id: string;
}

// Definir las propiedades para el formulario dinámico
interface DynamicFormProps {
    children?: React.ReactNode
    fields: FieldConfig[];
    buttonProps: ButtonProps; // Props para el botón de envío
    onSubmit: (formData: { [key: string]: string }) => void;
    className?: string;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, buttonProps, onSubmit, children, className }) => {
    // Estado para manejar los valores de los inputs
    const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

    // Manejar cambios en los inputs
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value, // Actualiza el valor del campo
        }));
    };

    // Manejar el envío del formulario
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formValues); // Pasa los valores al callback onSubmit
    };
    const childrenArray = React.Children.toArray(children);
    const topChild = childrenArray[0]; // Primer hijo
    const bottomChild = childrenArray[1];
    const endchild = childrenArray[2];
    return (
        <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
            {topChild}
            {fields.map((field) => (
                <Input
                    key={field.id}
                    id={field.id}
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                    icon={field.icon}
                    iconStyles={field.iconStyles}
                    showPassword={field.showPassword}
                    required={field.required}
                    value={formValues[field.id] || ''}
                    onChange={handleInputChange}
                />
            ))}
            {bottomChild}
            {/* Renderizamos el botón de envío con las props pasadas */}
            <Button type="submit" {...buttonProps} />
            {endchild}
        </form>
    );
};

export default DynamicForm;
