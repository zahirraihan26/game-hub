import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Playverse from './Playverse';

const Playverseadd = () => {
    return (
       <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Playverse></Playverse>
            </main>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Playverseadd;