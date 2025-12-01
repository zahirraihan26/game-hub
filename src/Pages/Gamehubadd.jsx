import React from 'react';
import Navbar from '../Componet/Navbar';
import Footer from '../Componet/Footer';
import Gamehub from './Gamehub';

const Gamehubadd = () => {
    return (
       <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Gamehub></Gamehub>
            </main>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Gamehubadd;