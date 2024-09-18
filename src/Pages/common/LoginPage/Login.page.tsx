import React from 'react';
import DynamicForm from '../../../components/organisms/FormOrganism/Form.component';
import { FormField } from '../../../components/organisms/FormOrganism/Form.component';
import Heading from '../../../components/Atoms/HeadingsComponent/Headings.components';
import { consultPost } from '../../../services/api.service';
import endpoints from '../../../services/apiEndpoint';
import { useNavigate } from 'react-router-dom';

const fields: FormField[] = [
    {
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
    }
];

const LoginPage: React.FC = React.memo(() => {
    const navigate = useNavigate();

    const handleSubmit = async (user: { [key: string]: string }) => {
        try {
            const response = await consultPost(endpoints.login, user);
             console.log(response)
            // Verifica si hay errores no relacionados con el campo
            if (response.non_field_errors) {
                if (response.non_field_errors[0] === "Correo electronico no registrado") {
                    alert('Tu correo no está registrado');
                } else {
                    alert('Correo o contraseña no válidos');
                }
                return; 
            }

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
            <Heading text='Inicia sesión' level='h2' />
            <DynamicForm fields={fields} onSubmit={handleSubmit} />
        </main>
    );
});

export default LoginPage;
