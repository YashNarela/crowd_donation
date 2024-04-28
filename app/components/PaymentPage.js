"use client"

import React ,{useState}from 'react'
import { initiate } from '../action/usersaction'
import Script from 'next/script'
import { useSession } from 'next-auth/react'

// import payments from 'razorpay/dist/types/payments'


const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({});


  const handleChange=(e)=>{
   setPaymentform( {...paymentform,[e.target.name]:e.target.value })
  }
    const pay=async (amount)=>{
      let a= await initiate(amount,username,paymentform)
    let orderId=a.id
        var options = {
            "key": process.env.NEXT_PUBLIC_URL, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "BuyMeAChai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.URL}/api/razorpay`,
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
   
<Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

   
   
{username}
    <div className='cover w-full bg-red-50 relative'>

   <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/16.gif?token-time=1714780800&amp;token-hash=wR398qHKEcIWNPwIALD4xiH50QPROiqQ31p3E1-dwsI%3D" alt=""/>

   <div className='absolute -bottom-20 right-[48%] border-white border-2 rounded-full'>
    <img  className='rounded-full' width={150} height={150} src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg" alt="" />
   </div>
    </div>
    <div className="info flex justify-center items-center my-24 flex-col gap-2 mb-32">
      <div className='font-bold text-lg'>
      @{username}
      </div>
      <div className='text-slate-400'>
  creating animated art for me
    </div>
    <div className='text-slate-400' >
 9712 members 82 post$
    </div>

    <div className="payment flex gap-3 w-[80%] mt-11">
      <div className="suppoters w-1/2 bg-slate-900 rounded-lg text-white p-10">
    <h2 className='text-2xl  font-bold my-5'>Supporters</h2>
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
  <input  type='text' name="name" className='w-full p-3 rounded-lg  bg-slate-800  '  placeholder= 'Enter Name'/>
  </div>

     
      <input  type='text' name='message' className='w-full p-3 rounded-lg  bg-slate-800  '  placeholder= 'Enter Message'/>
        <input   type='text' name='amount' className='w-full p-3 rounded-lg  bg-slate-800  '  placeholder= 'Enter Amount'/>
        <div className="text-center"></div>
        {/* <button className='bg-slate-800 p-3 rounded-lg hover:'>pay</button> */}
        <button type="button" className="text-white w-fit bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
       

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
