import React from 'react';
import DynamicForm from '../../../components/organisms/FormOrganism/Form.component';
/* import { FormField } from '../../../components/organisms/FormOrganism/Form.component';
import Heading from '../../../components/Atoms/HeadingsComponent/Headings.components'; */
import { consultPost } from '../../../services/api.service';
import endpoints from '../../../services/apiEndpoint';
import { useNavigate } from 'react-router-dom';
import { ButtonProps } from '../../../components/Atoms/ButtonComponent/Button.component';
import Heading from '../../../components/Atoms/HeadingsComponent/Headings.components';
import Button from '../../../components/Atoms/ButtonComponent/Button.component';
const fields = [
    {
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
        required: true,
    },
    {
        id: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password',
        showPassword: true,
        required: true,
    },

    /*  {
         id: 'email',
         label: 'Email',
         type: 'email',
         placeholder: 'Enter your email',
         required: true,
         autoComplete: 'email',
         icon: 'email',
         iconStyles: { color: 'gray', size: 20 }
     },
     {
         id: 'password',
         label: 'Password',
         type: 'password',
         placeholder: 'Enter your password',
         required: true,
         icon: 'eye',
         iconStyles: { color: 'gray', size: 20 }
     } */
];

const buttonProps: ButtonProps = {
    label: 'Iniciar sesion',
    icon: 'login',
    variant: "primary",
    size: 'l'
};

const LoginPage: React.FC = React.memo(() => {
    const navigate = useNavigate();

    const handleSubmit = async (formData: { [key: string]: string }) => {
        // Previene el comportamiento por defecto del formulario

        // Obtén los datos del formulario

        const user = formData

        try {
            const response = await consultPost(endpoints.login, user);


            // Verifica si hay errores no relacionados con el campo
            if (response.non_field_errors) {
                if (response.non_field_errors[0] === "Correo electronico no registrado") {
                    alert('Tu correo no está registrado');
                } else {
                    alert('Correo o contraseña no válidos');
                }
                return;
            }
            console.log(response.user_type)
            // Solo redirige si user_type está presente en la respuesta
            if (response.user_type) {
                if (response.user_type === "UserCustomer") {
                    navigate('/persona');
                } else {
                    navigate('/agente');
                }
            } else {
                alert('Respuesta del servidor no válida');
            }
        } catch (error) {
            console.error('Error en la autenticación:', error);
            alert('Error al intentar iniciar sesión');
        }
    };

    return (
        <main className='text-center'>
            <DynamicForm fields={fields} buttonProps={buttonProps} onSubmit={handleSubmit} className="bg-white shadow-lg m-auto mt-[5%] p-6 rounded-lg w-[90%] sm:w-[30%]">
                <Heading level='h2' text='Inicia sesion' />
                <div className='flex justify-between text-sm'>
                    <p className='text-start'>Recordar contraseña</p>
                    <p className='text-start'>Olvido su contraseña?</p>
                </div>
                <div className='flex justify-between items-center space-y-3 text-sm'>
                    <p>No tiene cuenta?</p>
                    <Button variant='secondary' size='s' label='Registrate' className='p-1 w-[25%] text-sm' type='button'/>
                </div>

            </DynamicForm>
        </main>
    );
});

export default LoginPage;
