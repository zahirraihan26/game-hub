import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Pages/Loading';

const Homelaout = () => {
    const {state} = useNavigation()
    return (
        <div className="flex flex-col min-h-screen bg-[#0b0b13] text-white">
            <header className="shadow-md sticky top-0 z-50">
                <Navbar></Navbar>
            </header>

            <main className="flex-grow">
              {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}  
            </main>

            <Footer className="mt-5"></Footer>
        </div>
    );
};

export default Homelaout;