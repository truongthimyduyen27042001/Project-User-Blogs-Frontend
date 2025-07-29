import Header from '../components/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth.store';
import { Skeleton } from 'antd';
import { useEffect } from 'react';

const DashboardLayout = () => {
  const { isAuthenticated, isLoading, checkAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    // Chỉ redirect khi đã check auth xong và không có token
    if (!isLoading && !isAuthenticated) {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        navigate('/login');
      }
    }
  }, [isAuthenticated, isLoading, navigate]);
  
  return (
    isLoading ? <Skeleton /> : <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 40px)', paddingTop: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout; 