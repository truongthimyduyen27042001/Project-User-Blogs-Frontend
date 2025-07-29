import { create } from 'zustand';
import { authAPI } from '../api/auth';
import type { LoginRequest, RegisterRequest, UserProfile } from '../api/auth';
import { AxiosError } from 'axios';

interface AuthState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  login: (data: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (data: LoginRequest) => {
    try {
      set({ isLoading: true, error: null });
      const response = await authAPI.login(data);

      // Chỉ lưu access token vào localStorage
      // Refresh token sẽ được lưu trong HTTP-only cookie tự động
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('user', JSON.stringify(response.user));

      set({
        user: response.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: unknown) {
      const err = error as AxiosError<{ message: string }>;
      set({
        error: err.response?.data?.message || 'Đăng nhập thất bại',
        isLoading: false,
      });
      throw error;
    }
  },

  register: async (data: RegisterRequest) => {
    try {
      set({ isLoading: true, error: null });
      const response = await authAPI.register(data);

      // Chỉ lưu access token vào localStorage
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('user', JSON.stringify(response.user));

      set({
        user: response.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: unknown) {
      const err = error as AxiosError<{ message: string }>;
      set({
        error: err.response?.data?.message || 'Đăng ký thất bại',
        isLoading: false,
      });
      throw error;
    }
  },

  logout: async () => {
    try {
      // Gọi API logout để clear refresh token cookie
      await authAPI.logout();
    } catch (error) {
      // Ignore logout API errors, vẫn clear local storage
      console.warn('Logout API error:', error);
      throw error;
    } finally {
      // Clear local storage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');

      set({
        user: null,
        isAuthenticated: false,
        error: null,
      });
    }
  },

  checkAuth: async () => {
    const token = localStorage.getItem('accessToken');
    const userStr = localStorage.getItem('user');

    if (!token || !userStr) {
      set({ isAuthenticated: false, user: null, isLoading: false });
      return;
    }

    try {
      // Set authenticated ngay lập tức nếu có token
      const user = JSON.parse(userStr);
      set({
        user,
        isAuthenticated: true,
        isLoading: true,
      });

      // Gọi API để validate token và lấy thông tin user mới nhất
      const freshUser = await authAPI.getProfile();
      set({
        user: freshUser,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      console.log('debug error checkAuth', error)
      // Token không hợp lệ hoặc refresh token cũng hết hạn
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  },

  clearError: () => {
    set({ error: null });
  },
}));
