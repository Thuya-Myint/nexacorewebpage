import React, { useState, useEffect } from 'react';
import { COMPANYNAME, COMPANYTYPE } from '../constants/intro.data';
import nexacore from '../assets/Logo/nexa.png';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = ({ isShown, hasBgColor }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [menuOpen]);

    return (
        <nav className={`flex justify-between items-center p-4 transition-all duration-700 z-[2000] text-[1rem] w-full 
         ${isShown ? 'fixed top-0 left-0' : ''}
         ${hasBgColor ? ' bg-white' : ''}
      `}>
            {/* Logo */}
            <div className='flex items-center gap-4'>
                <img src={nexacore} alt="logo" className='w-[30px] h-[30px]' />
                <div>
                    <h1 className='nexa-core text-[1rem]'>{COMPANYNAME}</h1>
                    <h1 className='text-[0.75rem] opacity-55 text-right'>{COMPANYTYPE}</h1>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex gap-8'>
                <Link to='/'>Home</Link>
                <Link to='/'>About Us</Link>
                <Link to='/'>News</Link>
                <Link to='/'>Our Business</Link>
                <Link to='/'>Join Us</Link>
                <Link to='/'>Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            <div
                className={
                    `z-[100] absolute top-16 right-0 bg-white w-full h-screen shadow-lg flex flex-col items-start gap-4 p-4 rounded-lg transition-transform duration-400 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`

                }>
                <Link to='/' onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to='/' onClick={() => setMenuOpen(false)}>About Us</Link>
                <Link to='/' onClick={() => setMenuOpen(false)}>News</Link>
                <Link to='/' onClick={() => setMenuOpen(false)}>Our Business</Link>
                <Link to='/' onClick={() => setMenuOpen(false)}>Join Us</Link>
                <Link to='/' onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
        </nav>
    );
};

export default Header;
