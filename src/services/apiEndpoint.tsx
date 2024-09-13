const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const endpoints = {
  login: `${API_BASE_URL}/signin`,
  check_session: `${API_BASE_URL}/check_session`,
};

export default endpoints;
