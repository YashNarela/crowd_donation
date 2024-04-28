"use client"
import Image from "next/image";
import { useSession,signIn,signOut } from "next-auth/react";

export default function Home() {
  return (
    <>
   <div className="flex justify-center flex-col gap-4  text-white h-[44vh] items-center ">
   <div className="flex gap-4 font-bold text-5xl justify-center items-center">Buy me a chai! <span><img className="invertImg" src="tea.gif "width={44} alt="" /></span></div>
   <div>
 
  <p> 
     A crowdfunding platform for creators get funded by your fans and followers
  </p>
  </div>
   <div>
   <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
   <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
   </div>
   
   </div>
   <div className="bg-white h-1 opacity-5">
   
   </div>

   <div className="text-white container mx-auto">
    <h1 className="text-2xl font-bold text-center my-14">yours fans can buy a chai </h1>
      <div className="flex gap-5 justify-around ">

      <div className="item  space-y-3 flex flex-col items-center justify-center">
      <img className="  bg-slate-400 rounded-full p-2 text-black" width={88} src=" /computer-on-the-computer.gif" alt="" />
      <p className="font-bold">fund yourself</p>
      <p className="  text-center">yours fans are aviable for you to help</p>
      </div>

      <div className="item  space-y-3 flex flex-col items-center justify-center">
      <img className="  bg-slate-400 rounded-full p-2 text-black" width={88} src=" bitcoin-crypto.gif" alt="" />
      <p className="font-bold">fund yourself</p>
      <p className="  text-center">yours fans are aviable for you to help</p>
      </div>

      <div className="item  space-y-3 flex flex-col items-center justify-center">
      <img className="  bg-slate-400 rounded-full p-2 text-black" width={88} src=" \coin.gif" alt="" />
      <p className="font-bold">fund yourself</p>
      <p className="  text-center">yours fans are aviable for you to help</p>
      </div>
    </div>
   </div>
   
   <div className="text-white container mx-auto flex flex-col items-center">
    <h2 className="text-2xl font-bold text-center my-14">yours fans can buy a chai </h2>
   <iframe width="560" height="315" src="https://www.youtube.com/embed/JZk6T1TmIrs?si=LeAKAks2WR89h4-b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>
   </>
  );
}
