import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/Sessionwraper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get Me A Fund  ",
  description: "This Website Is  Foe Crowd Funding ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
      <SessionWrapper>

     
        <Navbar/>
        <div className="min-h-screen  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
      
        {children}
        </div>
       
        <Footer/>
        </SessionWrapper>
      
      </body>
    </html>
  );
}
