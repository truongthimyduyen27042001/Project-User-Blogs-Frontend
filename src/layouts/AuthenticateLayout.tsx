import { Outlet } from 'react-router-dom';

const AuthenticateLayout = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <Outlet />
    </div>
  );
};

export default AuthenticateLayout; 