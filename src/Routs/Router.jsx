import { createBrowserRouter } from "react-router";
import Homelaout from "../Laouts/Homelaout";
import Home from "../Pages/Home";
import Games from "../Pages/Games";


import Errorpage from "../Componet/Errorpage";
import Login from "../Pages/Login";
import Authlaout from "../Laouts/Authlaout";
import Register from "../Pages/Register";
import Myprofile from "../Pages/Myprofile";
import Gamedetails from "../Pages/Gamedetails";
import Privetrout from "../Provider/Privetrout";

import NewsLeter from "../Componet/NewsLeter";
import Developers from "../Componet/Developers";
import ForgetPassword from "../Pages/ForgetPassword";
import Myprofilelogin from "../Pages/Myprofilelogin";
import Loading from "../Pages/Loading";



const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Homelaout></Homelaout>,
            errorElement: <Errorpage></Errorpage>,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: '/games',
                    element: <Games></Games>
                },



            ]
        },
        {
            path: '/developers',
            element: <Developers></Developers>
        },
        {
            path: '/myprofile',
            element: <Myprofile></Myprofile>,

        },
        {
            path: '/profileupdate',
            element: <Myprofilelogin></Myprofilelogin>
        },


        {
            path: '/newsletter',
            element: <NewsLeter></NewsLeter>

        },

        {
            path: "/auth",
            element: <Authlaout></Authlaout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>
                },

                {
                    path: "/auth/register",
                    element: <Register></Register>
                },
            ]

        },
        {
            path: "/game/details/:id",
            element: (
                <Privetrout>
                    <Gamedetails></Gamedetails>
                </Privetrout>
            ),
            loader: () => fetch("/game.json"),
            hydrateFallbackElement: <Loading></Loading>


        },


        {
            path: '/*',
            element: <Errorpage></Errorpage>
        },
        {
            path: '/ForgetPassword',
            element: <ForgetPassword></ForgetPassword>
        },

    ]
)

export default router