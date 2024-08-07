import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import TailoredTourModal from "./components/modals/TailoredTourModal";
import AirportShuttleModal from "./components/modals/AirportShuttleModal";
import CorporateShuttleModal from "./components/modals/CorporateShuttleModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pitsi Transport",
  description: "Giving time back to you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="flex flex-col min-h-screen">
          <TailoredTourModal /> 
          <AirportShuttleModal /> 
          <CorporateShuttleModal />
          <NavBar />  
          <main className="flex-grow bg-white"> 
            {children}
          </main>
          <Footer /> 
        </div>
      </body>
    </html>
  );
}
