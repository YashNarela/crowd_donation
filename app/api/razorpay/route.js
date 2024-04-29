import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import mongoose from "mongoose";
import Payment from "@/app/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/app/db/connectDb";
import Username from "@/app/[username]/page";
import User from "@/app/models/User";

export const Post=async (req)=>{
    await connectDB()
    let body=await req.formData()
    body=object.fromEntries(body)

    //check if razor pay id is present on server
    let p= await Payment.findOne({oid:body.razorpay_order_id})
    if( !p){
        return NextResponse.error(   { success:false,message:"order Id Not Found "})

    }
    // fetch  the user who is getting the payments
   
    // const instance=new Razorpay({
    //     key_id:process.env.KEY_ID,
    //     key_secert:secert
    // })
    let user=await User.findOne({username:p.to_user})
  const secert=user.razorpaysecert

    //verify payment
    let xx=validatePaymentVerification({"order_id":body.razorpay_order_id,"razorpay_payment_id":body.razorpay_payment_id},body.razorpay_signature,secert)


    if(xx){
        //update payment status 
        const updatedPayment=await payment.findOneAndUpdate({ oid:body.razorpay_order_id},{done:"true"},{new:true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)
    }
    else{

        return NextResponse.error("payment verification failed")
    }
}