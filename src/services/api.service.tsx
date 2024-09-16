import endpoints from './apiEndpoint';

import axios from 'axios';

export const checkSession = async (): Promise<boolean> => {
    try {
        const response = await axios.get(endpoints.check_session, ({ withCredentials: true }));
        return response.data
    } catch (error) {
        console.error('Error checking session:', error);
        return false;
    }
};
