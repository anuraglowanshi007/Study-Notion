import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children,active,linkto}) => {
  return (

    // This is for the button which is in the first section that changes upon the condition in Home page
   <Link to={linkto}>
         <div className={`text-center text-[13px] py-3 px-6 rounded-md font-bold 
         ${active ? "bg-yellow-50 text-black " : "bg-richblack-800 hover:scale-95 " }
         hover:scale-95 transition-all duration-200
         `}>
              {children}
         </div>
   </Link>
   
  ) 
}

export default Button;

