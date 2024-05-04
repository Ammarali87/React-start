import React from "react"


export default function Nav(){
  return (
    <>
     <div className="navbar  text-white fixed top-0   p-5 bg-[rgb(44,62,80)]">
     <div className="navbar-start">
      <h1 class=" text-2xl sm:text-xl mx-3 md:text-4xl "> Start FrameWork</h1>
     </div>
     <div className="navbar-center fixed right-6
     top-5 invisible sm:visible ">
       <a className="btn btn-ghost text-3xl">Home</a>
       <a className="btn btn-ghost text-3xl">About</a>
       <a className="btn btn-ghost text-3xl">Contact</a>
     </div>
     <div className="navbar-end">
     <div className="dropdown visible sm:invisible  mx-6">
         <div
           tabIndex={0}
           role="button"
           className="btn mr-4 hover:outline outline-gray-900  btn-ghost btn-circle"
         >
           <svg
              className="h-5    w-5"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M4 6h16M4 12h16M4 18h7"
             />
           </svg>
         </div>
         <ul
           tabIndex={0}
           className="menu   bg-[rgb(44,62,80)] -mx-[222px] menu-sm dropdown-content mt-3 z-[1] p-22    text-white shadow   rounded-box w-[500%]   "
         >
           <li>
             <a class="text-lg" >Homepage</a>
           </li>
           <li>
             <a class="text-lg">Portfolio</a>
           </li>
           <li>
             <a class="text-lg">About</a>
           </li>
         </ul>
       </div>
     </div>
   </div>
    
    </>
  )
}