import React, { useState } from 'react'
import { footerItems } from '../constants/navigationItem'
import nexacore from '../assets/Logo/nexa.png'
import { LuMaximize } from "react-icons/lu";
import { LuMinimize } from "react-icons/lu";
const Footer = () => {
    const [isMapOpen, setIsMapOpen] = useState(false)
    return (
        <div
            className='w-full h-80 md:h-1/2 bgFooterTeam relative '
        >
            <div className=' w-full flex flex-wrap items-center p-4 justify-between'
                style={{
                    backgroundColor: 'rgba(0,0,0,0.8)'
                }}
            >
                <div className='p-2 rounded-3xl relative' style={{
                    backgroundColor: 'rgba(255,255,255,0)'
                }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.8586373430953!2d96.1120484077774!3d21.99397688541017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6deaaeacf221%3A0x63d8c6f4f0d38ec8!2sNexa%20Core!5e0!3m2!1sen!2smm!4v1739767512754!5m2!1sen!2smm"
                        width="250"
                        height="250"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        className='rounded-full border-2 border-bat-blood '
                    ></iframe>
                    <button className='transition-all duration-300 rounded-xl p-1 text-white-smoke cursor-pointer hover:bg-white hover:text-black active:opacity-50'
                        onClick={() => { setIsMapOpen(prev => !prev) }}>
                        <LuMaximize className='text-[1.5rem] ' />
                    </button>
                </div>
                <div className=''>
                    <div>
                        <h1 className='text-white text-[1.5rem] font-thin'>NEXA CORE IT Solution</h1>
                    </div>
                    <div className='flex flex-col text-white-smoke gap-1 mt-4'>
                        {
                            footerItems.quickLink.map(item => (
                                <a href="" className='hover:text-white p-1'
                                    style={{
                                        // backgroundColor: 'rgba(255,255,255,0.2)'
                                    }}
                                >{item}</a>
                            ))
                        }
                    </div>
                </div>
                <div className=''>
                    <div>
                        <h1 className='text-white text-[1.5rem] font-thin'>Our Services</h1>
                    </div>
                    <div className='flex flex-col text-white-smoke gap-1 mt-4'>
                        {
                            footerItems.ourServices.map(item => (
                                <a href="" className='hover:text-white p-1'
                                    style={{
                                        // backgroundColor: 'rgba(255,255,255,0.2)'
                                    }}
                                >{item}</a>
                            ))
                        }
                    </div>
                </div>
                <form className='w-[30%] text-white ' onSubmit={(e) => { e.preventDefault() }}>
                    <div className=' flex justify-between border-l-2 my-4'>
                        <label for="email" className='text-[1.2rem] font-thin pl-4'>Subscribe for news letter!</label>

                    </div>
                    <div className='w-full flex items-center gap-2'>
                        <input type="text" id='email' className='bg-white w-full p-2 rounded-lg text-black' />
                        <button className='cursor-pointer font-thin text-white text-[1rem] bg-bat-blood p-2 rounded-lg active:opacity-45'>Send</button>
                    </div>
                    <p className='mt-2'
                        style={{
                            fontWeight: 100,
                            opacity: 0.5
                        }}
                    >Delivering innovative web and mobile solutions, we craft scalable, secure, and user-friendly software to empower businesses. Let’s build the future together.</p>
                </form>
            </div>
            <div className='bg-white  bottom-0 left-0 w-full flex flex-col items-center  mt-[2%]'>
                <img src={nexacore} alt="" className='w-[30px] h-[30px]' />
                <p className=' p-2 '
                    style={{
                        fontWeight: 350,

                    }}
                >&copy; {new Date().getFullYear()} NEXA CORE. All Rights Reserved.</p>
            </div>
            {
                isMapOpen ?
                    <div className='absolute w-screen h-screen inset-0 '
                        style={{
                            backgroundColor: 'rgba(0,0,0,0.4)'
                        }}>
                        <div className='w-full flex justify-center'>
                            <div className=' absolute top-[20px] active:opacity-40 p-2 rounded-full text-white bg-Blur flex justify-center items-center gap-4 cursor-pointer' style={{
                                backgroundColor: 'rgba(0,0,0,0.5)'
                            }}
                                onClick={() => setIsMapOpen(prev => !prev)}
                            >
                                <LuMinimize className='text-[1.5rem]' />
                                <p className='opacity-70'>Minimize</p>
                            </div>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.8586373430953!2d96.1120484077774!3d21.99397688541017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6deaaeacf221%3A0x63d8c6f4f0d38ec8!2sNexa%20Core!5e0!3m2!1sen!2smm!4v1739767512754!5m2!1sen!2smm"
                            width="100%"
                            height="100%"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className=' border-2  '
                        ></iframe>
                    </div>
                    : ''
            }
        </div>
    )
}

export default Footer
