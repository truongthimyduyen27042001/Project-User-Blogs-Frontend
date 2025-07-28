import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/provider";

function App() {
  return <RouterProvider router={createBrowserRouter(Object.values(routes))} />;
}

export default App;
