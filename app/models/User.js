import mongoose from "mongoose";
const {Schema ,model}=mongoose;

const UserSchema=new Schema({
    email:{type:String,required:true},
    name:{type:String},
    username:{type:String},
    profilepic:{type:String},
    coverpic:{type:String},
    createdAt:{type:Date, default:Date.now },
    razorpayid:{type:String},
    razorpaysecert:{type:String},
    updatedAt:{type:Date, default:Date.now }

})


export default mongoose.models.User|| model("User",UserSchema) ;