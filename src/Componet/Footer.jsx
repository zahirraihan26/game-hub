import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
           <footer className="footer footer-horizontal footer-center bg-gray-950  text-primary-content p-10">
  <aside>
    <div>
        <div className=" ">
        <GoMail className="text-4xl mb-2"></GoMail>
        </div>
    </div>
    <p className="font-bold">
      Gamehub Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
        <Link to={"https://www.Gmail.com/"}>
       
        <GoMail className='w-8 h-8'></GoMail>
       </Link>
      </a>
      <a>
        <Link to={"https://www.facebook.com/"}>
        <FaFacebook className='w-8 h-8'></FaFacebook>
        </Link>
      </a>
      <a>
         <Link to={"https://www.Twiter.com/"}>
          <FaTwitter className='w-8 h-8'></FaTwitter>
        </Link>
      </a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer; 