import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-[#0b0b13] relative overflow-hidden'>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse-glow"></div>
            
            <div className="relative">
                <div className="w-16 h-16 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-secondary rounded-full animate-spin [animation-delay:-0.5s] blur-[2px]"></div>
            </div>
            
            <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-6 tracking-widest uppercase animate-pulse">
                Loading Data
            </h2>
        </div>
    ); 
};

export default Loading;