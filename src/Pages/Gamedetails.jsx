

import Navbar from '../Componet/Navbar';
import Footer from '../Componet/Footer';
import DetailsCarrd from './DetailsCarrd';
import { useLoaderData, useParams } from 'react-router';
import { useEffect, useState } from 'react';


const Gamedetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [detal,setdetail] =useState({})
    // console.log(data,id,detal)

    useEffect(()=>{

        const gameditels = data.find((singeldetal)=>singeldetal.id == id)
        
        setdetail(gameditels)
    },[data,id])


    return (
        <div>
          <header>
            <Navbar></Navbar>
          </header>
          <main className='min-h-1/2 p-3 w-11/12 mx-auto'>
            <h2 className='font-bold text-4xl mt-6'>Game Details</h2>
            <div className='fonr-bold text-3xl mt-8'> 
              <DetailsCarrd detal={detal} ></DetailsCarrd>
            </div>
          </main>

          <footer>
         <Footer></Footer>
          </footer>
        </div>
    );
};

export default Gamedetails;