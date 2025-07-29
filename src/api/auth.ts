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

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
}

export const authAPI = {
  // Đăng nhập
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post('/users/login', data);
    return response.data;
  },

  // Đăng ký
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await apiClient.post('/users/register', data);
    return response.data;
  },

  // Đăng xuất - sẽ clear cả access token và refresh token cookie
  logout: async (): Promise<void> => {
    await apiClient.post('/users/logout');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  },

  // Lấy thông tin user hiện tại - dựa vào JWT token
  getProfile: async (): Promise<UserProfile> => {
    const response = await apiClient.get('/users/profile');
    return response.data;
  },

  // Refresh token - sử dụng HTTP-only cookie
  refreshToken: async (): Promise<RefreshTokenResponse> => {
    const response = await apiClient.post('/auth/refresh');
      return response.data;
  },
}; 