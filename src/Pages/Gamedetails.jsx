

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
          <main>
            
            <div > 
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