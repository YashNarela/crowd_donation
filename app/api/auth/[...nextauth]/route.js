import NextAuth from 'next-auth'
// import AppleProvider from "next-auth/providers/apple";
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
// import EmailProvider from "next-auth/providers/email";
import GitHubProvider from "next-auth/providers/github";
import mongoose from 'mongoose';
import User from '@/app/models/User';
import Payment from '@/app/models/Payment';
import connectDB from '@/app/db/connectDb';

export const authoptions=NextAuth({
providers: [


  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })

  //   AppleProvider({
  //     clientId: process.env.APPLE_ID,
  //     clientSecret: process.env.APPLE_SECRET
  //   }),

  // GoogleProvider({
  //   clientId: process.env.GOOGLE_CLIENT_ID,
  //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
  // }),
  // EmailProvider({
  //   server: process.env.EMAIL_SERVER,
  //   from: process.env.EMAIL_FROM
  // }),
  // FacebookProvider({
  //   clientId: process.env.FACEBOOK_CLIENT_ID,
  //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET
  // })
],
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    const isAllowedToSignIn = true
    
 if( account.provider=="github"){
  //connect to database
  const client =await mongoose.connect("mongodb://localhost:27017")

  const currentUser= await User.findOne({email:email})
  if(!currentUser){

    const newUser=new User({

      email:user.email,
      username:user.email.split("@")[0],
      
    })

   
  }


 
  return true //else access is denied and we dont got signed in 
 }
 

  },
  async session({ session, user, token }) {
    const dbUser=await User.findOne({email:session.user.email})
    session.user.name=dbUser.name
    return session
  },
}

})
export{ authoptions as GET, authoptions as POST}
