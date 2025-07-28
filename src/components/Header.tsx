import { PhoneOutlined, FacebookFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';

const Header = () => {
  return (
    <div
      style={{
        height: 40,
        width: '100%',
        background: 'linear-gradient(315deg, rgba(240, 0, 255, 1) 30%, rgba(0, 239, 255, 1) 100%)',
        position: 'fixed',
        top: 0, 
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: 1140,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: Phone */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fff', fontWeight: 500 }}>
          <PhoneOutlined style={{ fontSize: 18 }} />
          <span style={{ fontSize: 15 }}>+84 91852271</span>
        </div>
        {/* Center: Promo Text */}
        <div style={{ color: '#fff', fontWeight: 700, fontSize: 16, letterSpacing: 1, textShadow: '0 1px 8px #0002' }}>
          Summer Special <span style={{ color: '#ff0', textShadow: '0 1px 8px #0006' }}>Save Upto 30% off</span> on your trip
        </div>
        {/* Right: Social Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <FacebookFilled style={{ fontSize: 20 }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <InstagramFilled style={{ fontSize: 20 }} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <LinkedinFilled style={{ fontSize: 20 }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header; 