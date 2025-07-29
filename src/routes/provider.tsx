import { paths } from ".";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import BlogDetailPage from "../features/blogs/pages/BlogDetailPage";
import BlogEditPage from "../features/blogs/pages/BlogEditPage";
import BlogListPage from "../features/blogs/pages/BlogListPage";
import ChatPage from "../features/chat/pages/ChatPage";
import DashboardLayout from "../layouts/DashboardLayout";

const routes = {
  // Auth routes - không có layout
  Login: {
    path: paths.Login,
    element: <LoginPage />
  },
  Register: {
    path: paths.Register,
    element: <RegisterPage />
  },
  
  // Dashboard routes với children
  Dashboard: {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true, // Index route cho "/"
        element: <BlogListPage />
      },
      {
        path: "blogs/:id", // Relative path
        element: <BlogDetailPage />
      },
      {
        path: "blogs/:id/edit", // Relative path
        element: <BlogEditPage />
      },
      {
        path: "chat", // Relative path
        element: <ChatPage />
      }
    ]
  }
} as const;

export default routes;