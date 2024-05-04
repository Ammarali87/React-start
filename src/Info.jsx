import React from "react"


export default function Info(){
  return (
    <>
     <div className="Home   h-[240%] text-white  p-7  
       bg-[rgb(44,62,80)]
     ">    
      <div className="  mx-auto text-center ">
                   <div className="flex justify-center flex-col md:flex-row">
                   <h2 class=" font-semibold  md:ml-[144px]	  p-7 text-4xl">
                     Location
                     <p class=" pt-3 text-sm">
                       33 NewYork Manhatin </p>
                     <p class=" pt-3 text-sm">
                       124 Clark new </p>
                 
                   </h2> 
                   <h2 class=" font-semibold	  p-7 text-2xl">
                      AROUND THE WEB
                      <div className=" mt-3  icon flex gap-4 justify-center ">
                      <i class="fa-brands text-xl border-2 rounded-[70%] h-11 p-2 fa-facebook "></i>
                      <i class="fa-brands  text-xl border-2 rounded-[70%] h-11  p-2  fa-linkedin "></i>
                      <i class="fa-brands  text-xl border-2 rounded-[70%] h-11  p-2 fa-twitter "></i>
                      <i class="fa-brands  text-xl border-2 rounded-[70%] h-11  p-2 fa-google "></i>
                      </div>
                   </h2> 
                   <h2 class=" font-semibold	  p-7 text-3xl">
                   ABOUT FREELANCER
                      <p class=" text-lg font-thin mt-3">
                      Freelance is a free to use, <br/> licensed Bootstrap theme created by Route
                      </p>
                   </h2> 

                   </div>
               
                   </div>
    
   </div>
    
    </>
  )
}