const API_BASE_URL = 'http://localhost:8000/api';

const endpoints = {
  login: `${API_BASE_URL}/signin`,
  check_session: `${API_BASE_URL}/check_session`,
};

export default endpoints;
