import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import User from "./components/sidebar/user.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import('./style/reset.css');
import('./style/App.css');

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <User />,
      },
    ]
  },

]);

export default function App() {
  return (
    // <Layout>
    //   <Home />
    // </Layout>
    <RouterProvider router={router} />
  );
  
}


