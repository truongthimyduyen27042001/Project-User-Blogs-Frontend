import axios from 'axios';

// API Base URL - có thể thay đổi theo environment
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Tạo axios instance với cấu hình mặc định
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - tự động thêm token vào header
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - xử lý lỗi chung
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Nếu token hết hạn (401), redirect về login
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient; 