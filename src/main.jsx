
import { createRoot, } from 'react-dom/client'

import './global.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import UserRoot from './root/UserRoot';
import UserDetail from './pages/UserDetail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/user",
                element: <User />,
            },
            { 
                path: '/users/:id',
                 element: <UserDetail/>},
        ]
    },

]);

createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

);