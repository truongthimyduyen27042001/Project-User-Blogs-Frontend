import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 40px)', marginTop: '60px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout; 