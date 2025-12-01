import React from 'react';
import Navbar from './Navbar';
import News from './News';
import Footer from './Footer';

const NewsLeter = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <News></News>
            </main>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default NewsLeter;