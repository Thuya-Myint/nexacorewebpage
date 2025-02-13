import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import { TITLE, SUBTITLE } from '../constants/intro.data';
import macmock1 from '../assets/MockUps/mockup1.png'
import macmock2 from '../assets/MockUps/mockup2.png'
import macmock3 from '../assets/MockUps/mockup3.png'
import macmock4 from '../assets/MockUps/mockup4.png'
import macmock5 from '../assets/MockUps/mockup5.png'
const HomeLayout = () => {
   const [isShown, setIsShown] = useState(false)
   const [showBoxOne, setShowBoxOne] = useState(false);
   const [showBoxTwo, setShowBoxTwo] = useState(false);
   const [showBoxThree, setShowBoxThree] = useState(false);
   const [showBoxFour, setShowBoxFour] = useState(false);
   const [showBoxFive, setShowBoxFive] = useState(false);
   const [showBoxSix, setShowBoxSix] = useState(false);


   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;
         setIsShown(scrollY > 500)
         setShowBoxOne(scrollY > 500 && scrollY <= 2000);
         setShowBoxTwo(scrollY > 2000 && scrollY <= 3500);
         setShowBoxThree(scrollY > 3500 && scrollY <= 5000)
         setShowBoxFour(scrollY > 5000 && scrollY <= 8000)
         setShowBoxFive(scrollY > 6000 && scrollY <= 8000)
         setShowBoxSix(scrollY > 7000 && scrollY <= 8000)
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);



   return (
      <div className='w-screen h-[1000vh] flex flex-col items-center '>
         <Header isShown={isShown} />
         <h1 className='mt-[100px] mb-[40px] text-[1.2rem] font-[150]'>
            {TITLE}
         </h1>
         <Logo />
         <div className='w-[600px] text-center mt-[40px] mb-[40px]'>
            <h3 className=' text-[1rem] font-[150] '>
               {SUBTITLE}
            </h3>
         </div>
         <button className='transition-all duration-150 bg-bat-blood mb-[40px] text-white px-2 py-1 rounded-lg flex items-center gap-4 border-2 border-white
         cursor-pointer
         active:opacity-85 active:shadow-2xl active:scale-[99.7%]'>
            Transform Your Business with Cutting-Edge Software Solutions
            <RxCaretRight className='text-[2rem]' />
         </button>
         <button className='bg-white border-2
          cursor-pointer
          border-bat-blood flex items-center gap-4 px-2 py-1 transition-all duration-150 rounded-lg'>
            Get a free consultation
            <RxCaretDown className='text-[2rem]' />
         </button>
         <ChatBot />

         {/* The animated div */}
         <div className='w-full relative flex justify-center h-[100vh] '>
            <div className={`w-[700px] h-[400px]  rounded-xl fixed left-1/2 -translate-x-1/2 transition-all duration-500 ${showBoxOne ? 'top-[15%] opacity-100' : 'top-[50%] opacity-0'}`}>
               <img src={macmock1} alt="" className='w-full h-full ' />
            </div>
            <div className={`absolute transition-all z-[100] w-1/2 p-4 text-white  rounded-2xl duration-[1500] text-center ${showBoxOne ? 'top-[90%] opacity-100' : 'top-[50%] opacity-0'}`}
               style={{
                  backgroundColor: 'rgba(0,0,0,0.8)'
               }}>
               <div className='text-[1.4rem]'>SKY GLOBAL</div>
               <div className='text-[0.9rem] opacity-60'>
                  Sky Global Multi Services is your one-stop solution for a wide range of global and local services, tailored to meet your personal and professional needs. From career advancement to home care, we provide innovative, AI-powered tools and comprehensive service offerings to empower individuals and families worldwide. Explore the future of convenience and functionality with our multi-dimensional application and website.
               </div>
            </div>
            <div className={`w-[700px] h-[400px]  rounded-xl fixed left-1/2 -translate-x-1/2 transition-all duration-500 ${showBoxTwo ? 'top-[15%] opacity-100' : 'top-[50%] opacity-0'}`}>
               <img src={macmock2} alt="" className='w-full h-full ' />
            </div>
            <div className={`absolute transition-all z-[100] w-1/2 p-4 text-white  rounded-2xl duration-[1500] text-center ${showBoxTwo ? 'top-[250%] opacity-100' : 'top-[40%] opacity-0'}`}
               style={{
                  backgroundColor: 'rgba(0,0,0,0.8)'
               }}>
               <div className='text-[1.4rem]'>Variety Of Features</div>
               <div className='text-[0.9rem] opacity-60'>
                  Our web page is a fully functional platform that provides a variety of essential services, including AI-powered tools, real-time exchange rates, job opportunities, educational courses, cruise tracking, flight status updates, home care services, and an information center. Designed for convenience and efficiency, our platform ensures seamless access to accurate and up-to-date information, helping users stay informed and make better decisions. Whether you're looking for career growth, travel updates, or personal assistance, our website is built to serve your needs with reliability and ease.
               </div>
            </div>
            <div className={`w-[700px] h-[400px]  rounded-xl fixed left-1/2 -translate-x-1/2 transition-all duration-500 ${showBoxThree ? 'top-[15%] opacity-100' : 'top-[50%] opacity-0'}`}>
               <img src={macmock3} alt="" className='w-full h-full ' />
            </div>
            <div className={`absolute transition-all z-[100] w-1/2 p-4 text-white  rounded-2xl duration-[1500] text-center ${showBoxThree ? 'top-[485%] opacity-100' : 'top-[40%] opacity-0'}`}
               style={{
                  backgroundColor: 'rgba(0,0,0,0.8)'
               }}>
               <div className='text-[1.4rem]'>Our Achievements!</div>
               <div className='text-[0.9rem] opacity-60'>
                  We have successfully developed a wide range of functional, unique, power-efficient, and cost-effective web and mobile applications. Our solutions are designed to deliver high performance while optimizing resource consumption, ensuring seamless user experiences across different platforms. By leveraging cutting-edge technologies and innovative development strategies, we create applications that not only meet business needs but also provide scalability, security, and affordability. Our commitment to excellence drives us to continuously refine our processes, making our apps more efficient, user-friendly, and impactful in today's digital landscape.
               </div>
               <button className='transition-all duration-100 bg-bat-blood mt-4 p-2 rounded-md active:opacity-65 cursor-pointer'>
                  See More
               </button>
            </div>
            <div className={`w-[700px] h-[400px] z-50  rounded-xl fixed left-1/2 -translate-x-1/2 transition-all duration-500 ${showBoxFour ? 'top-[15%] opacity-100' : 'top-[50%] opacity-0'}`}>
               <img src={macmock1} alt="" className='w-full h-full ' />
            </div>
            <div className={`absolute transition-all z-[100] w-1/2 p-4 text-white  rounded-2xl duration-[1500] text-center ${showBoxFour ? 'top-[70%] fixed opacity-100' : 'top-[50%] opacity-0'}`}
               style={{
                  backgroundColor: 'rgba(0,0,0,0.8)'
               }}>
               <div className='text-[1.4rem]'>We develop multi-platform app</div>
               <div className='text-[0.9rem] opacity-60'>
                  Seamless and user friendly web page
               </div>
            </div>
            <div className={`w-[700px] h-[400px] z-0 left-[10%]   rounded-xl fixed -translate-x-1/2 transition-all duration-500 ${showBoxFive ? 'top-[15%]  opacity-100' : 'top-[50%] opacity-0'}`}>
               <img src={macmock4} alt="" className='w-full h-full ' />
            </div>
            <div className={`absolute transition-all z-[100] w-[100px] p-4 text-white  rounded-2xl duration-[1500] text-center ${showBoxFive ? 'top-[70%] left-[6%] fixed opacity-100' : 'top-[50%] opacity-0'}`}
               style={{
                  backgroundColor: 'rgba(0,0,0,0.8)'
               }}>
               <div className='text-[0.9rem] opacity-60'>
                  Android
               </div>
            </div>
            <div className={`w-[700px] h-[400px] right-[-10%]  rounded-xl fixed transition-all duration-500 ${showBoxSix ? 'top-[15%]  opacity-100' : 'top-[50%] opacity-0'}`}>
               <img src={macmock5} alt="" className='w-full h-full ' />
            </div>
            <div className={`absolute transition-all z-[100] w-[100px] p-4 text-white  rounded-2xl duration-[1500] text-center ${showBoxSix ? 'top-[70%] right-[10%] fixed opacity-100' : 'top-[50%] opacity-0'}`}
               style={{
                  backgroundColor: 'rgba(0,0,0,0.8)'
               }}>
               <div className='text-[0.9rem] opacity-60'>
                  IOS
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeLayout;
