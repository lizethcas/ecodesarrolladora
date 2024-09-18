// api.service.ts

import axios from 'axios';

export const consultGet = async (endpoint: string): Promise<boolean> => {
    try {
        const response = await axios.get(endpoint, {
            withCredentials: true
        });
        return response.data.isValid;
    } catch (err) {
        if (err.response?.status === 401) {
            // Redirigir al login o mostrar mensaje de error
            alert("Unauthorized: Please check your credentials.");
        }
        return false;
    }
};

export const consultPost = async (endpoint: string, body: object) => {
    try {
        const response = await axios.post(endpoint, body, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true, // Asegúrate de que tu servidor acepte credenciales
        });
        return response.data;
    } catch (err) {
      
        return err.response.data;
    }
};
