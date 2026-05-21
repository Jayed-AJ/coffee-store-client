import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import CoffeeDetails from './components/CoffeeDetails';
import Register from './components/Register';
import Login from './components/Login';
import AuthProvider from './contexts/AuthProvider';
import Users from './components/Users';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("https://server-side-ochre-one.vercel.app/coffees")
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffee/:id",
        Component: CoffeeDetails,
        loader: ({params}) => fetch(`https://server-side-ochre-one.vercel.app/coffees/${params.id}`)
      },
      {
        path: "/updateCoffee/:id",
        Component: UpdateCoffee,
        loader: ({params}) => fetch(`https://server-side-ochre-one.vercel.app/coffees/${params.id}`)
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: '/users',
        Component: Users,
        loader : () => fetch("https://server-side-ochre-one.vercel.app/users")
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
