// api.service.ts

import axios from 'axios';

export const consultGet = async (endpoint: string): Promise<boolean> => {
    try {
        const response = await axios.get(endpoint, { withCredentials: true });
        console.log(response)
        return response.data.is_authenticated;
    } catch (err) {
        console.log(err)
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
