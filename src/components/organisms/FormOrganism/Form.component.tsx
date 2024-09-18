import React, { useState } from 'react';
import InputLabel from '../../molecules/Input.component/InputLabel.compoentn';
import Button from '../../Atoms/ButtonComponent/Button.component';
import { InputAtomProps } from '../../Atoms/LabelComponent/Input.component.prueba';

export interface FormField extends InputAtomProps {
    id: string;
    label: string;
    showPassword?: boolean;
}

interface DynamicFormProps {
    fields: FormField[];
    onSubmit: (formData: { [key: string]: string }) => void;
    children?: React.ReactNode;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, children, onSubmit }) => {
    const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formValues); // Envía los valores del formulario al componente padre
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 m-auto w-[90%] sm:w-[30%]">
            {fields.map((field, index) => (
                <InputLabel
                    key={index}
                    id={field.id}
                    labelText={field.label}
                    inputProps={{
                        type: field.type,
                        placeholder: field.placeholder,
                        required: field.required,
                        autoComplete: field.autoComplete,
                        icon: field.icon,
                        iconStyles: field.iconStyles,
                        onChange: handleChange, // Maneja el cambio de valores
                        value: formValues[field.id] || '', // Mantén el estado sincronizado
                        ...field,
                    }}
                    labelProps={{ htmlFor: field.id }}
                />
            ))}
            {children}
            <Button type="submit" size="l" label="Iniciar sesión" icon="login" />
        </form>
    );
};

export default DynamicForm;
