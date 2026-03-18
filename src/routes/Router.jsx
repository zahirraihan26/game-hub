import { createBrowserRouter } from "react-router";
import Homelaout from "../layouts/Homelaout";
import Home from "../Pages/Home";
import Games from "../Pages/Games";


import Errorpage from "../components/Errorpage";
import Login from "../Pages/Login";
import Authlaout from "../layouts/Authlaout";
import Register from "../Pages/Register";
import Myprofile from "../Pages/Myprofile";
import Gamedetails from "../Pages/Gamedetails";
import Privetrout from "../providers/Privetrout";

import NewsLeter from "../components/NewsLeter";
import Developers from "../components/Developers";
import ForgetPassword from "../Pages/ForgetPassword";
import Myprofilelogin from "../Pages/Myprofilelogin";
import Loading from "../Pages/Loading";
import AllGames from "../Pages/AllGames";
import Gamehub from "../Pages/Gamehub";
import Gamehubadd from "../Pages/Gamehubadd";



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

            ]
        },
        {
            path: '/games',
            element: <AllGames></AllGames>
        },
        {
            path: '/developers',
            element: <Developers></Developers>
        },
        {
            path: '/myprofile',
            element: (
                <Privetrout>
                    <Myprofile></Myprofile>
                </Privetrout>
            ),

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
            path: '/gamehub',
            element:<Gamehubadd></Gamehubadd>
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
            element: <Gamedetails></Gamedetails>,
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