import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import { TITLE, SUBTITLE } from '../constants/intro.data';
import { HiMiniGlobeAsiaAustralia } from "react-icons/hi2";
import { BsAndroid2 } from "react-icons/bs";
import { IoIosAppstore } from "react-icons/io";
import macmock1 from '../assets/MockUps/mockup1.png'
import macmock2 from '../assets/MockUps/mockup2.png'
import macmock3 from '../assets/MockUps/mockup3.png'
import macmock4 from '../assets/MockUps/mockup4.png'
import macmock5 from '../assets/MockUps/mockup5.png'
import { FaArrowRight } from "react-icons/fa6";
const HomeLayout = () => {
   const [isShown, setIsShown] = useState(false)
   const [showBoxOne, setShowBoxOne] = useState(false);
   const [showBoxTwo, setShowBoxTwo] = useState(false);
   const [showBoxThree, setShowBoxThree] = useState(false);
   const [showBoxFour, setShowBoxFour] = useState(false);
   const [showBoxFive, setShowBoxFive] = useState(false);
   const [showBoxSix, setShowBoxSix] = useState(false);
   const [showBoxSeven, setShowBoxSeven] = useState(false);
   const [showBoxEight, setShowBoxEight] = useState(false);
   const [showBoxNine, setShowBoxNine] = useState(false)
   const [showBoxTen, setShowBoxTen] = useState(false)
   const [showBoxEleven, setShowBoxEleven] = useState(false)
   const [showBoxTwelve, setShowBoxTwelve] = useState(false)
   const [showBoxThirteen, setShowBoxThirteen] = useState(false)
   const [showBoxFourteen, setShowBoxFourteen] = useState(false)
   const [showBoxFifteen, setShowBoxFifteen] = useState(false)


   const serviceRef = useRef(null)
   const aboutUsRef = useRef(null)

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;
         setIsShown(scrollY > 1500)
         setShowBoxOne(scrollY > 500 && scrollY <= 2000);
         setShowBoxTwo(scrollY > 2000 && scrollY <= 3500);
         setShowBoxThree(scrollY > 3500 && scrollY <= 5000)
         setShowBoxFour(scrollY > 5000 && scrollY <= 8000)
         setShowBoxFive(scrollY > 6000 && scrollY <= 8000)
         setShowBoxSix(scrollY > 7000 && scrollY <= 8000)
         setShowBoxSeven(scrollY > 8000 && scrollY <= 14000)
         setShowBoxEight(scrollY > 9000 && scrollY <= 14000)
         setShowBoxNine(scrollY > 10000 && scrollY <= 14000)
         setShowBoxTen(scrollY > 11000 && scrollY <= 14000)
         setShowBoxEleven(scrollY > 12000 && scrollY <= 14000)
         setShowBoxTwelve(scrollY > 8000 && scrollY <= 14000)
         setShowBoxThirteen(scrollY > 14000 && scrollY <= 30000)
         setShowBoxFourteen(scrollY > 14000 && scrollY <= 30000)
         setShowBoxFifteen(scrollY > 17000 && scrollY <= 30000)
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const scrollByVH = (vh) => {
      const pixels = (vh / 100) * window.innerHeight; // Convert vh to pixels
      window.scrollTo({ top: pixels, behavior: 'smooth' });
   };


   return (
      <div className='w-screen h-[3000vh] flex flex-col items-center '>
         <Header isShown={isShown} hasBgColor={showBoxSeven} />
         <div className='w-full h-[100vh] flex flex-col items-center'>
            <h1 className='mt-[100px] mb-[40px] text-[1.2rem] font-[150]'>
               {TITLE}
            </h1>
            <Logo />
            <div className='w-[600px] text-center mt-[40px] mb-[40px]'>
               <h3 className=' text-[1rem] font-[150] '>
                  {SUBTITLE}
               </h3>
            </div>
            <button className='transition-all cursor-pointer z-[9999] duration-150 bg-bat-blood mb-[40px] text-white px-2 py-1 rounded-lg flex items-center gap-4 border-2 border-white
            active:opacity-85 active:shadow-2xl active:scale-[99.7%]'
               onClick={() => scrollByVH(1600)}
            >
               Transform Your Business with Cutting-Edge Software Solutions
               <RxCaretRight className='text-[2rem]' />
            </button>
            <button className='bg-white border-2 mb-10
          cursor-pointer
          border-bat-blood flex items-center gap-4 px-2 py-1 transition-all duration-150 rounded-lg'>
               Get a free consultation
               <RxCaretDown className='text-[2rem]' />
            </button>
         </div>
         <ChatBot />

         {/* The animated div */}
         <div className='w-full relative flex justify-center h-[100vh]'>
            <div className={`w-[700px] h-[400px]  rounded-xl fixed left-1/2 -translate-x-1/2 transition-all duration-500 ${showBoxOne ? 'top-[15%] opacity-100' : 'top-[50%] opacity-0'}`}>
               <img src={macmock1} alt="" className='w-full h-full ' />
            </div>
            <div className={`absolute transition-all z-[100] bg-Blur w-1/2 p-4 text-white  rounded-2xl duration-[1500] text-center ${showBoxOne ? 'top-[90%] opacity-100' : 'top-[50%] opacity-0'}`}
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
            <div className={`absolute transition-all bg-Blur z-[100] w-1/2 p-4 text-white  rounded-2xl duration-[1500] text-center ${showBoxTwo ? 'top-[250%] opacity-100' : 'top-[40%] opacity-0'}`}
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
            <div className={`absolute transition-all z-[100] bg-Blur w-1/2 p-4 text-white  rounded-2xl duration-[1500] text-center ${showBoxThree ? 'top-[485%] opacity-100' : 'top-[40%] opacity-0'}`}
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
            <div className={`w-[700px] h-[400px] z-50  rounded-xl fixed left-1/2 -translate-x-1/2 transition-all duration-500 ${showBoxFour ? 'top-[15%] opacity-100 scale-[1]' : 'top-[50%] opacity-0 scale-[100]'}`}>
               <img src={macmock1} alt="" className='w-full h-full ' />
            </div>
            <div className={`absolute bg-Blur transition-all z-[100] w-1/2 p-4 text-white  rounded-2xl duration-[1500] text-center ${showBoxFour ? 'top-[70%] fixed opacity-100' : 'top-[50%] opacity-0'}`}
               style={{
                  backgroundColor: 'rgba(0,0,0,0.8)'
               }}>
               <div className='text-[1.4rem]'>We develop multi-platform app</div>
               <div className='text-[0.9rem] opacity-60'>
                  Seamless and user friendly web page
               </div>
            </div>
            <div className={`w-[700px] h-[400px] z-0   rounded-xl fixed -translate-x-1/2 transition-all duration-500 ${showBoxFive ? 'top-[15%] left-[10%] opacity-100' : 'top-[15%] left-[-50%] opacity-0'}`}>
               <img src={macmock4} alt="" className='w-full h-full ' />
            </div>
            <div className={` bg-Blur absolute transition-all z-[100] w-[100px] p-4 text-white  rounded-2xl duration-[1500] text-center ${showBoxFive ? 'top-[70%] left-[6%] fixed opacity-100' : 'top-[50%] opacity-0'}`}
               style={{
                  backgroundColor: 'rgba(0,0,0,0.8)'
               }}>
               <div className='text-[0.9rem] opacity-60'>
                  Android
               </div>
            </div>
            <div className={`w-[700px] h-[400px]   rounded-xl fixed transition-all duration-500 ${showBoxSix ? 'top-[15%]  opacity-100 right-[-10%]' : 'top-[15%] right-[-100%] opacity-0'}`}>
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

            <div className={`absolute w-full h-[100vh] bgSoftwareTeam`}>

            </div>
            <div ref={serviceRef}>
               <div className={`w-full h-[100vh] inset-0 bgSoftwareTeam fixed transition-all duration-700 ${showBoxSeven ? 'opacity-100 ' : 'opacity-0 '}`}>
                  <div className={`absolute inset-0 w-full h-full flex flex-col items-center `}
                  >
                     <h1 className={`mt-[15vh] h-fit text-white transition-all duration-700 p-2 w-1/2 text-center text-[1.2rem] rounded-lg bg-Blur ${showBoxTwelve ? 'opacity-100 top-0' : 'opacity-0 top-[50%]'
                        }`}
                        style={{
                           backgroundColor: 'rgba(0,0,0,0.4)'
                        }}
                     >What's our services?
                     </h1>
                     <p className={`text-white-smoke transition-all duration-700 w-1/2 mt-4 p-4 rounded-xl text-center bg-Blur ${showBoxTwelve ? 'opacity-100 top-0' : 'opacity-0 top-[50%]'
                        }`}
                        style={{
                           backgroundColor: 'rgba(0,0,0,0.4)'
                        }}
                     >
                        At <span className='font-semibold text-bat-blood'> Nexa Core </span>, we provide end-to-end software development solutions tailored to your business needs. Our expertise spans across multiple platforms, ensuring seamless, high-quality applications that drive growth and innovation.
                     </p>
                     <div className={`transition-all duration-1000 text-white w-1/2 mt-4 p-4 rounded-xl text-center bg-Blur relative ${showBoxEight ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                           backgroundColor: 'rgba(0,0,0,0.4)'
                        }}>
                        <h2 className='text-[1.1rem]'>Web Development</h2>
                        <p className='mt-2 text-white-smoke'>Custom, scalable, and responsive websites & web applications.</p>
                        <HiMiniGlobeAsiaAustralia className='absolute top-[10px] right-[10px] text-[2rem] text-hadfield-blue' />
                     </div>
                     <div className={`transition-all duration-1000 text-white w-1/2 mt-4 p-4 rounded-xl text-center bg-Blur relative ${showBoxNine ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                           backgroundColor: 'rgba(0,0,0,0.4)'
                        }}>
                        <h2 className='text-[1.1rem]'>IOS App Development</h2>
                        <p className='mt-2 text-white-smoke'>High-performance iPhone & iPad apps with a sleek user experience.</p>
                        <IoIosAppstore className='absolute top-[10px] right-[10px] text-[2rem] text-bat-blood' />
                     </div>
                     <div className={`transition-all duration-1000 text-white w-1/2 mt-4 p-4 rounded-xl text-center bg-Blur relative ${showBoxTen ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                           backgroundColor: 'rgba(0,0,0,0.4)'
                        }}>
                        <h2 className='text-[1.1rem]'>Android App Development</h2>
                        <p className='mt-2 text-white-smoke'>High-performance iPhone & iPad apps with a sleek user experience.</p>
                        <BsAndroid2 className='absolute top-[10px] right-[10px] text-[2rem] text-mysterious-blue' />
                     </div>
                     <div className={`transition-all duration-1000 text-white w-1/2 mt-4 p-4 rounded-xl text-center bg-Blur relative ${showBoxEleven ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                           backgroundColor: 'rgba(0,0,0,0.4)'
                        }}>
                        <h2 className='text-[1.1rem]'>Cross-Platform Development</h2>
                        <p className='mt-2 text-white-smoke'>Cost-effective solutions that work on both iOS & Android.</p>
                        <div className='absolute top-[10px] right-[10px]'>
                           <BsAndroid2 className='  text-[1.5rem] text-mysterious-blue' />
                           <IoIosAppstore className='  text-[1.5rem] text-bat-blood mt-4 ' />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div ref={aboutUsRef} className='z-[999]'>
               <div className={`w-full h-[100vh] inset-0 bg-white fixed transition-all duration-700 ${showBoxThirteen ? 'opacity-100 ' : 'opacity-0 '}`}>
                  <div className={`mt-[12vh] p-4 w-1/2 transition-all duration-700 bg-black text-white absolute ${showBoxFourteen ? 'opacity-100 ' : ' opacity-0'}`}>
                     <div className='text-[2rem] font-light'>About Us</div>
                     <p className='text-white-smoke mt-2 text-justify'>Our Company <span className='text-white'>NEXA CORE</span> has founded by 4 shareholders Mr.Aung Kyaw Nyunt, Mr.Bo Bo Myint, Mr.Aung Kyaw Myint, Mr.Kyaw Zay Ya.</p>
                     <div className='mt-[10px] opacity-50 text-[0.8rem]'>At the Year Of 2024.</div>
                     <button className='text-[1rem] absolute bottom-[0px] right-[0px] cursor-pointer p-2 active:opacity-60'
                        style={{
                           backgroundColor: 'rgba(255,255,255,0.2)'
                        }}
                     >
                        <FaArrowRight />
                     </button>
                  </div>
                  <div className={`mt-[12vh] p-4 w-1/2 transition-all top-[30%] right-0 duration-700 bg-black text-white absolute ${showBoxFifteen ? 'opacity-100 ' : ' opacity-0'}`}>
                     <div className='text-[2rem] font-light'>Our Goals</div>
                     <p className='text-white-smoke mt-2 text-justify'>Our Company is a cutting-edge software development company specializing in web and cross-platform applications. With a strong focus on React and React Native, we build high-performance, scalable, and user-friendly solutions tailored to modern business needs. </p>
                  </div>

                  {/* <div className='mt-[12vh] p-4 w-1/2 bg-black text-white relative'>
                     <div className='text-[2rem] font-light'>Our Goals</div>
                     <p className='text-white-smoke mt-2 text-justify'>Our Company is a cutting-edge software development company specializing in web and cross-platform applications. With a strong focus on React and React Native, we build high-performance, scalable, and user-friendly solutions tailored to modern business needs. </p>
                  </div> */}

                  {/* <div className='mt-[12vh] p-4 w-1/2 bg-black text-white relative'>
                     <div className='text-[2rem] font-light'>Contact Us!</div>
                     <div className='w-full'>
                        <p className='text-[0.8rem] opacity-60 mb-1'>Subscribe Us!</p>
                        <form className='w-full flex gap-4' onSubmit={(event) => {
                           event.preventDefault()
                        }}>
                           <input type="text" className='w-2/3 bg-white p-2 rounded-md text-black' placeholder='Enter You E-Mail Address ' />
                           <button className='bg-bat-blood px-2 rounded-md cursor-pointer active:opacity-70'>Subscribe</button>
                        </form>
                     </div>
                     <div className='mt-4 flex justify-between'>
                        <div className='text-white-smoke'>Hot Line Number</div>
                        <div>+959 234 565 798</div>
                     </div>
                     <div className='mt-4 flex justify-between'>
                        <div className='text-white-smoke'>Address</div>
                        <div>+959 234 565 798</div>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>

      </div>
   );
};

export default HomeLayout;
