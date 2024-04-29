"use server"

import Razorpay from "razorpay"
import Payment from "../models/Payment"
import connectDB from "../db/connectDb"
import User from "../models/User";




export const initiate=async( amount,to_username,paymentform)=>{
    await connectDB()

     // fetch  the user who is getting the payments
     let user=await User.findOne({username:p.to_username})
       const secert=user.razorpaysecert

    var instance=new Razorpay({key_id: user.razorpayid,key_secret:secert})
    
    instance.orders.create({
        "key": "YOUR_NEXT_PUBLIC_KEY_ID", // Enter the Key ID generated from the Dashboard
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
 await Payment.create({oid:x.id,amount:amount/100,to_user:to_username,name:paymentform.name,message:paymentform.message})
 return x

}
export const fetchuser=async(username)=>{
    await connectDB()
    let u=await User.findOne({username:username})
    let user=u.toObject({flattenObjectIds:true})
    return user
}
export const  fetchpayments=async (username)=>{
    await connectDB()
    //find all the payment sorted by decreasing order of amount 
    let p=await Payment.find({to_user:username ,done:true}).sort({amount:-1}).limit(10).lean()
    return p
}
export const updateProfile=async(data,oldusername)=>{

await connectDB()
 let ndata=Object.fromEntries(data)

// if the username is being updated ,we need to update  the username  in the payment table as well 
if( oldusername!==ndata.username){
let u=await User.findOne({ username:ndata.username })}
if(u){
    return {error:"username already exists"}
    //now update all the usernames in payments table
    await Payment.updateMany({to_user:oldusername},{to_user:ndata.username})
}
else{
await User.updateOne({email:ndata.email},ndata)
}
}
