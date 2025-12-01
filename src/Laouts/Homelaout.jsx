import React from 'react';
import Navbar from '../Componet/Navbar';
import Footer from '../Componet/Footer';
import { Outlet, useNavigation } from 'react-router';
import GameCard from '../Componet/GameCard';
import Loading from '../Pages/Loading';




const Homelaout = () => {
    const {state} = useNavigation()
    return (

        <div className="flex flex-col min-h-screen bg-[#0f0f0f] text-white">

            <header  className="shadow-md sticky top-0 z-50">
                <Navbar></Navbar>
               
            </header>

            <section className="  mt-2">
               
              {state=="loading"? <Loading></Loading> :<Outlet></Outlet>}  
                <section>
                     
                    <GameCard></GameCard>
                </section>
                <Footer  className="mt-5"></Footer>
            </section>


            

        </div>


    );
};

export default Homelaout;