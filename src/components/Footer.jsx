import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { IoGameControllerOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <div>
    <footer className="glass-dark border-t border-white/5 pt-16 pb-8 text-white/70 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2 mb-6 group">
            <IoGameControllerOutline className="text-3xl text-primary transition-transform group-hover:rotate-12" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              GameHub
            </h1>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            The ultimate destination for discovery and play. Experience the next generation of gaming with our curated collection and premium community.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all">
              <FaFacebook className="text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all">
              <FaTwitter className="text-xl" />
            </a>
            <a href="mailto:contact@gamehub.com" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all">
              <GoMail className="text-xl" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Platform</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/games" className="hover:text-primary transition-colors">Browse Games</Link></li>
            <li><Link to="/newsletter" className="hover:text-primary transition-colors">Newsletter</Link></li>
            <li><Link to="/gamehub" className="hover:text-primary transition-colors">Gamehub+</Link></li>
            <li><Link to="/developers" className="hover:text-primary transition-colors">Developers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Resources</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe to get the latest updates and exclusive offers.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary/50 flex-1" />
            <button className="btn-premium px-4 text-sm">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} GameHub Industries Ltd. All rights reserved.</p>
        <div className="flex space-x-6">
          <span>Reliable tech since 1992</span>
          <span className="text-accent/50 cursor-pointer hover:text-accent">System Status: Online</span>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer; 