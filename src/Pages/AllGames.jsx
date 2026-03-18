import React from 'react';
import Games from './Games';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AllGames = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Games></Games>
            </main>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default AllGames;