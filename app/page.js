"use client"
import Image from "next/image";
import { useSession,signIn,signOut } from "next-auth/react";
  import Link from "next/link";
export default function Home() {
  return (
    <>
   <div className="flex justify-center flex-col gap-4  text-white h-[44vh] px-5 md:px-0  text-xs  md:text-base  items-center ">
   <div className="flex  gap-6 md:gap-20 font-bold md:text-5xl justify-center text-xl items-center">Raise Fund <span><img className="invertImg" src="fun.gif "width={48} alt="" /></span></div>
   <div>
 
  <p className="text-center md:text-left"> 
     A CrowdFunding Platform For Beggars Get Funded By Your Fans And Followers
  </p>
  </div>
   <div>
    <Link  href={'/login '} > 
   <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
   </Link>
  <Link href={'/about'}>
   <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>

   </Link>
   </div>
   
   </div>
   <div className="bg-white h-1 opacity-10">
   
   </div>

   <div className="text-white container mx-auto">
    <h1 className="text-2xl font-bold text-center my-14 pb-32 pt-14 px-10">Fans Are There For You </h1>
      <div className="flex gap-5 justify-around ">

      <div className="item  space-y-3 flex flex-col items-center justify-center">
      <img className="  bg-slate-400 rounded-full p-2 text-black" width={88} src=" /computer-on-the-computer.gif" alt="" />
      <p className="font-bold text-center">Fund Yourself</p>
      <p className="  text-center">Yours Fans Are Aviable For You Yo Help</p>
      </div>

      <div className="item  space-y-3 flex flex-col items-center justify-center">
      <img className="  bg-slate-400 rounded-full p-2 text-black" width={88} src=" bitcoin-crypto.gif" alt="" />
      <p className="font-bold">Fund Yourself</p>
      <p className="  text-center">Yours Fans Are Aviable For You Yo Help</p>
      </div>

      <div className="item  space-y-3 flex flex-col items-center justify-center">
      <img className="  bg-slate-400 rounded-full p-2 text-black" width={88} src=" \coin.gif" alt="" />
      <p className="font-bold">Fund Yourself</p>
      <p className="  text-center">Yours Fans Are Aviable For You Yo Help</p>
      </div>
    </div>
   </div>
   
   <div className="text-white container mx-auto pb-32 pt-14 justify-center flex flex-col items-center">
    <h2 className="text-2xl font-bold text-center my-14">Fans Are There For You </h2>
   {/* <iframe  src="https://www.youtube.com/embed/JZk6T1TmIrs?si=LeAKAks2WR89h4-b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
   </div>
   </>
  );
}
