import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/app/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/app/db/connectDb";

export const Post=async (req)=>{
    await connectDB()
    let body=await req.formData()
    body=object.fromEntries(body)

    //check if razor pay id is present on server
    let p= await Payment.findOne({oid:body.razorpay_order_id})
    if( !p){
        return NextResponse.error("order Id Not Found ")

    }

    //verify payment
    let xx=validatePaymentVerification({"order_id":body.razorpay_order_id,"razorpay_payment_id":body.razorpay_payment_id,"razorpay_signature":body.razorpay_signature},process.env.KEY_SECERT)


    if(xx){
        //update payment status 
        const updatedPayment=await payment.findOneAndUpdate({ oid:body.razorpay_order_id},{done:"true"},{new:true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)
    }
    else{

        return NextResponse.error("payment verification failed")
    }
}