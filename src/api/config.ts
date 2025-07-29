import axios from 'axios';

// API Base URL - có thể thay đổi theo environment
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Tạo axios instance với cấu hình mặc định
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  // Bật credentials để gửi cookies
  withCredentials: true,
});

// Request interceptor - tự động thêm access token vào header
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

// Response interceptor - xử lý lỗi và refresh token
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Nếu lỗi 401 và chưa retry
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Gọi API refresh token (cookies sẽ tự động gửi)
        const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {}, {
          withCredentials: true,
        });

        const { accessToken } = response.data;
        console.log('debug accessToken token success', accessToken, response.data)
        
        // Lưu access token mới
        localStorage.setItem('accessToken', accessToken);
        
        // Retry request ban đầu với token mới
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Refresh token cũng hết hạn, logout user
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient; 