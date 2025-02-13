import React, { useState, useRef, useEffect } from 'react'
import { TbMessageChatbotFilled } from "react-icons/tb";
import { RiArrowDownDoubleFill } from "react-icons/ri";

const ChatBot = () => {
   const [isChatting, setIsChatting] = useState(false)
   const buttonRef = useRef(null)
   const arrowRef = useRef(null)

   // Scroll to the correct element when isChatting changes
   // useEffect(() => {
   //    if (isChatting && arrowRef.current) {

   //       arrowRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
   //    } else if (!isChatting && buttonRef.current) {
   //       buttonRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
   //    }
   // }, [isChatting])

   return (
      <div
         className={` rounded-xl fixed bottom-[20px] right-[20px] bg-hadfield-blue
         w-[50px] h-[50px] active:shadow-2xl active:shadow-black active:opacity-85
         flex flex-col justify-center items-center cursor-pointer overflow-hidden`}
         onClick={() => setIsChatting(prev => !prev)}
      >
         {/* Chatbot Icon (Scrolls here if not chatting) */}
         <TbMessageChatbotFilled ref={buttonRef} className="text-[2rem] text-white absolute top-[0%] mt-[10px]" />

         {/* Arrow Icon (Scrolls here if chatting) */}
         <RiArrowDownDoubleFill ref={arrowRef} className="text-[2.5rem] text-white absolute top-[120%] pb-[10px]" />
      </div>
   )
}

export default ChatBot
