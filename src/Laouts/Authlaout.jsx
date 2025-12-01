
import React from 'react';
import Navbar from '../Componet/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Componet/Footer';
import Loading from '../Pages/Loading';


const Authlaout = () => {
    const {state} = useNavigation()
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='my-4'>
              {state=="loading"? <Loading></Loading> :  <Outlet></Outlet>} 
            </main>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Authlaout;