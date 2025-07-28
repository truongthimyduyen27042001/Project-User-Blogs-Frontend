import apiClient from './config';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  accessToken: string;
}

export const authAPI = {
  // Đăng nhập
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/login', data);
    return response.data;
  },

  // Đăng ký
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/register', data);
    return response.data;
  },

  // Đăng xuất
  logout: async (): Promise<void> => {
    await apiClient.post('/auth/logout');
  },

  // Lấy thông tin user hiện tại
  getProfile: async (): Promise<AuthResponse['user']> => {
    const response = await apiClient.get('/auth/profile');
    return response.data;
  },

  // Refresh token (nếu cần)
  refreshToken: async (): Promise<{ accessToken: string }> => {
    const response = await apiClient.post('/auth/refresh');
    return response.data;
  },
}; 