"use client"
import React, { useEffect, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react'

 import { useRouter } from 'next/navigation' 
 import {fetchuser, updateProfile } from '../action/usersaction';
 import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';


 const Dashboard =() => {
    const {data:session,update}=useSession()

const router = useRouter ()

const [form, setform] =useState({})

useEffect(() => {
    getData()
if (!session) {
router.push('/login')
 }
 }, [router, session])

const getData=async()=>{
    let u= await fetchuser(session.user.name)
    setform(u)

}


const handleChange=(e) => {
setform({...form, [e.target. name]: e.target.value})}


const handleSubmit=async (e)=>{

    let a= await updateProfile(e,session.user.name)
    toast('Profile Updated', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
}
return (
    <>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
{/* Same as */}
<ToastContainer />



<div className='container mx-auto py-5'>
< h1 className='text-center my-5 text-3xl font-bold' >Welcome to youDashboard</h1>
<form className=" max-w-2xl mx-auto " action={handleSubmit}>

<div className='my-2'>
<label htmlfor="name" className="block mb-2 text-sm font-medium text-white dark:text-white"> Name </label> <input value={form.name?form.name: ""} onChange={handleChange} type="name" name= "name" id="name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-560 focus :border-blue-560dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> 


</div>

<div className='my-2'>
<label htmlfor="email" className="block mb-2 text-sm font-medium text-white dark:text-white"> Email </label> <input value={form.email?form.email: ""} onChange={handleChange} type="email" name= "email" id="email" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-560 focus :border-blue-560dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> 


</div>

<div className='my-2'>
<label htmlfor="username" className="block mb-2 text-sm font-medium text-white dark:text-white"> UserName </label> <input value={form.username?form.username: ""} onChange={handleChange} type="text" name= "username" id="username" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-560 focus :border-blue-560dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> 


</div>

<div className='my-2'>
<label htmlfor="profilepic" className="block mb-2 text-sm font-medium text-white dark:text-white"> Profile</label> <input value={form.profilepic?form.profilepic: ""} onChange={handleChange} type="text" name= "profilepic" id="profilepic" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-560 focus :border-blue-560dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> 


</div>

<div className='my-2'>
<label htmlfor="coverpic" className="block mb-2 text-sm font-medium text-white dark:text-white"> Cover </label> <input value={form.coverpic?form.coverpic: ""} onChange={handleChange} type="text" name= "coverpic" id="coverpic" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-560 focus :border-blue-560dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> 


</div>

<div className='my-2'>
<label htmlfor="razorpayid" className="block mb-2 text-sm font-medium text-white dark:text-white"> RazorPayId </label> <input value={form.razorpayid?form.razorpayid: ""} onChange={handleChange} type="text" name= "razorpayid" id="razorpayid" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-560 focus :border-blue-560dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> 


</div>
<div className='my-2'>
<label htmlfor="razorpaysecret" className="block mb-2 text-sm font-medium text-white dark:text-white"> RazorPaySecret </label> <input value={form.razorpaysecret?form.razorpaysecret: ""} onChange={handleChange} type="text" name= "razorpaysecret" id="razorpaysecret" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-560 focus :border-blue-560dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> 


</div>

<div className='my-6'>
<button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save</button>
</div>
</form>
</div>
</>
)}


export default Dashboard