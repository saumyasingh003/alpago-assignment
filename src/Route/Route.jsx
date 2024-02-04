import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import LogIn from '../Pages/LogIn/LogIn';
import Register from '../Pages/Register/Register';
import Users from '../Pages/Users/Users';

const Route = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children: [
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/users',
                element:<Users />
            }
        ]
    },
    {path:'/login', element:<LogIn />},
    {path:'/register', element:<Register />}
])

export default Route;