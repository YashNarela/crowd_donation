"use client"

// import React ,{useState}from 'react'
// import { fetchpayment, initiate } from '../action/usersaction'
// import Script from 'next/script'
// import { useSession } from 'next-auth/react'
// import { fetchuser,fetchpayment,initiate } from '../action/usersaction'
// // import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
// import { useSearchParams } from 'next/navigation'
// import { ToastContainer, toast } from 'react-toastify';

//   import 'react-toastify/dist/ReactToastify.css';
//   import { Bounce } from 'react-toastify'
//   import { useRouter } from 'next/navigation'
//   import { notFound } from 'next/navigation'

// import payments from 'razorpay/dist/types/payments'


// const{ data:session}=useSession()



import React, { useState } from 'react';
import { fetchpayment, initiate } from '../action/usersaction'; // Import these functions only once
import Script from 'next/script';
import { useSession } from 'next-auth/react';
// import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';


const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({name:"",message:"",amount:""});
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setPayments] = useState([])
  const searchParms=useSearchParams()
  const router=useRouter()


 
  useEffect(() => {
    getData()
  }, [])
  

  useEffect(() => {
    if( searchParms.get("paymentdone")=="true" )
    toast('Thanks For Donation', {
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
  
    router.push(`/${username}`)
  }, [])
  

  const handleChange=(e)=>{
   setPaymentform( {...paymentform,[e.target.name]:e.target.value })
  }
  const getData=async (params)=>{
 
    let u=fetchuser(username)
    setcurrentUser(u)
    let dbpayments=await fetchpayment(username)
    setPayments(dbpayments)

  }
    const pay=async (amount)=>{
      let a= await initiate(amount,username,paymentform)
    let orderId=a.id
        var options = {
            "key":currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "BuyMeAChai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
       

    }
    var rzp1 = new Razorpay(options);
   
        rzp1.open();
       

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
   
<Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

   
   
{username}
    <div className='cover w-full bg-red-50 relative'>

   <img className='object-cover w-full h-[350]' src={currentUser.coverpic} alt=""/>

   <div className='absolute -bottom-20 right-[48%] border-white border-2 rounded-full size-36'>
    <img  className='rounded-full object-cover size-36'  width={150} height={150} src={currentUser.profilepic} alt="" />
   </div>
    </div>
    <div className="info flex justify-center items-center my-24 flex-col gap-2 mb-32">
      <div className='font-bold text-lg'>
      @{username}
      </div>
      <div className='text-slate-400'>
     Lets help {username} get a chai
    </div>
    <div className='text-slate-400' >
     {payments.length} payments. {currentUser.name} ₹{payments.reduce((a,b)=>a+b.amount,0)} has raised 
    </div>

    <div className="payment flex gap-3 w-[80%] mt-11">
      <div className="suppoters w-1/2 bg-slate-900 rounded-lg text-white p-10">
      
    <h2 className='text-2xl  font-bold my-5'>Top 10 Supporters</h2>
    
{ payments.length==0&& <li>No Payments Yet</li>}

    {payments.map((p,i)=>{

      return <li key={i}className='my-4 flex gap-2 items-center' >

        <img width={33} src="avatar.gif" alt="user avatar" />

        <span>
        { p.name }donated  <span className='font-bold'>₹${p.amount}</span> with a "{p.message }" 
        </span>
      </li>
    })}
    <ul className='mx-5'>
     <li className='my-2 flex gap-2 items-center'>
      
 
 <img width={55} src="avatarone.gif" alt="user avatar" />
 <span>
 Yash Donated  <span className='font-bold'>$30</span> with a message " i support you bro"

 </span>
 
     </li>
     <li className='my-2 flex gap-2 items-center'>
      
 
      <img width={55} src="avatarone.gif" alt="user avatar" />
      <span>
      Yash Donated  <span className='font-bold'>$30</span> with a message " i support you bro"
     
      </span>
      
          </li>
        
          <li className='my-2 flex gap-2 items-center'>
      
 
      <img width={55} src="avatarone.gif" alt="user avatar" />
      <span>
      Yash Donated  <span className='font-bold'>$30</span> with a message " i support you bro"
     
      </span>
      
          </li>
        
        
        </ul>

      </div>
      <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10 text-white">

      <h2 className='text-2xl  font-bold my-5'>Payment</h2>
      <div className='flex gap-2 flex-col'>
  <div>
  <input onChange={handleChange} value={paymentform.name} type='text' name="name" className='w-full p-3 rounded-lg  bg-slate-800  '  placeholder= 'Enter Name'/>
  </div>

     
      <input   onChange={handleChange} value={paymentform.message}  type='text' name='message' className='w-full p-3 rounded-lg  bg-slate-800  '  placeholder= 'Enter Message'/>
        <input   onChange={handleChange}  value={paymentform.amount}  type='text' name='amount' className='w-full p-3 rounded-lg  bg-slate-800  '  placeholder= 'Enter Amount'/>
        <div className="text-center"></div>
        {/* <button className='bg-slate-800 p-3 rounded-lg hover:'>pay</button> */}
        <button onClick={()=>{Number.parseInt(pay(paymentform.amount)* 100 )}} type="button" className="text-white w-fit bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-100" disabled={paymentform.name?.length<3|| paymentform.message?.length<4|| paymentform.amount?.length<1}>Pay</button>
       

      </div>
      <div className='flex gap-2 mt-5'>
        <button className='bg-slate-800 p-3  rounded-lg' onClick={()=>{pay(1000)}} >Pay ₹10</button>
        <button className='bg-slate-800 p-3  rounded-lg'  onClick={()=>{pay(2000)}} >Pay ₹20</button>
        <button className='bg-slate-800 p-3  rounded-lg'  onClick={()=>{pay(3000)}}>Pay ₹30</button>

      </div>
      </div>
    </div>
    </div>
   
   </>
  )
}


export default PaymentPage
