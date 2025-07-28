import { paths } from ".";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import BlogDetailPage from "../features/blogs/pages/BlogDetailPage";
import BlogEditPage from "../features/blogs/pages/BlogEditPage";
import BlogListPage from "../features/blogs/pages/BlogListPage";
import ChatPage from "../features/chat/pages/ChatPage";

const routes = {
 Login: {
  path: paths.Login,
  element: <LoginPage />
 },
 Register: {
  path: paths.Register,
  element: <RegisterPage />
 },
 BlogList: {
  path: paths.BlogList,
  element: <BlogListPage />
 },
 BlogDetail: {
  path: paths.BlogDetail,
  element: <BlogDetailPage />
 },
 BlogEdit: {
  path: paths.BlogEdit,
  element: <BlogEditPage />
 },
 Chat: {
  path: paths.Chat,
  element: <ChatPage />
 }
} as const;

export default routes;