import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";





 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shoptronics",
  description: "place where you find your desirable things!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
         <Navbar/> 
        {children}
        </body>
    </html>
  );
}
