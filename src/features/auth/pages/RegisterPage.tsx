import { useEffect, useRef, useState } from "react";
import { Form, Input, Button, Typography, Card } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, CompassTwoTone } from "@ant-design/icons";
import "antd/dist/reset.css";

const { Title, Text } = Typography;

const images = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
];

const RegisterPage = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return undefined;
    };
  }, [current]);

  return (
    <div className="w-screen h-screen overflow-hidden flex">
      {/* Left: Background slideshow 60vw */}
      <div className="w-[60vw] h-full relative overflow-hidden">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Travel background"
            className={`w-full h-full object-cover object-center absolute top-0 left-0 transition-all duration-1000 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ transitionProperty: 'opacity' }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-cyan-700/30 to-yellow-200/30" />
      </div>
      {/* Right: Register Form 40vw */}
      <div className="w-[40vw] h-full flex items-center justify-center bg-white">
        <Card
          className="w-full max-w-md shadow-2xl border-0 rounded-3xl bg-white/90 backdrop-blur-lg"
          bodyStyle={{ padding: "2.5rem" }}
        >
          <div className="flex flex-col items-center mb-6">
            <CompassTwoTone twoToneColor="#52c41a" style={{ fontSize: 48 }} />
            <Title level={3} className="!text-blue-700 mt-2 mb-0 text-center">
              Đăng ký Blog Travel
            </Title>
            <Text className="block text-center text-gray-500 text-base mt-1">
              Khám phá thế giới cùng Blog Travel
            </Text>
          </div>
          <Form layout="vertical" name="register_form">
            <Form.Item name="name" label="Họ và tên" rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}> 
              <Input prefix={<UserOutlined />} placeholder="Nhập họ và tên" size="large" className="rounded-lg" />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: "Vui lòng nhập email!" }]}> 
              <Input prefix={<MailOutlined />} placeholder="Nhập email của bạn" size="large" className="rounded-lg" />
            </Form.Item>
            <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}> 
              <Input.Password prefix={<LockOutlined />} placeholder="Tạo mật khẩu" size="large" className="rounded-lg" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full bg-gradient-to-r from-green-400 to-blue-500 border-0 text-white text-lg font-semibold h-12 rounded-xl shadow-lg hover:from-blue-500 hover:to-green-400 transition-all" size="large">Đăng ký</Button>
            </Form.Item>
          </Form>
          <Text className="block text-center mt-4 text-gray-600">
            Đã có tài khoản?{" "}
            <a href="/login" className="text-blue-600 font-medium hover:underline">Đăng nhập</a>
          </Text>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;