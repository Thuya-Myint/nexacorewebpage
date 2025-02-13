import React from 'react'
import { COMPANYNAME, COMPANYTYPE } from '../constants/intro.data'
import nexacore from '../assets/Logo/nexa.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Header = ({ isShown }) => {
   return (
      <nav className={`flex justify-between items-center p-4 z-[1000]  text-[1rem] w-full ${isShown ? 'fixed top-0 left-0' : ''}`}>
         <div className=' flex  items-center gap-4'>
            <img src={nexacore} alt="" className='w-[30px] h-[30px]' />
            <div>
               <h1 className='nexa-core text-[1rem]'>{COMPANYNAME}</h1>
               <h1 className=' text-[0.8rem] opacity-55 text-right'>{COMPANYTYPE}</h1>
            </div>
         </div>
         <div className='flex gap-8'>
            <Link to='/'>Home</Link>
            <Link>About Us</Link>
            <Link>News</Link>
            <Link>Our Business</Link>
            <Link>Join Us</Link>
            <Link>Contact</Link>
         </div>
      </nav >

   )
}

export default Header
