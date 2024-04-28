"use server"

import Razorpay from "razorpay"
import Payment from "../models/Payment"
import connectDB from "../db/connectDb"
import User from "../models/User"


export const initiate=async( amount,to_username,paymentform)=>{
    await connectDB()

    var instance=new Razorpay({key_id: process.env.KEY_ID,key_secret:process.env.KEY_SECERT})
    
    instance.orders.create({
        "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        receipt: "receipt#1",
        notes:{
            key1:"value3",
            key2:"value2"
        }

})


 let options={
    amount:Number.parseInt(amount) ,
    currency:"INR",

 }
 let x=await instance.orders.create(options)
 //create a payment object which show pending  payment in database
 await Payment.create({oid:x.id,amount:amount,to_user:to_username,name:paymentform.name,message:paymentform.message})
 return x

}