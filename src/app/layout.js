import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "WriteWave",
  description: "Learn Computer Programming and Computer science",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        {" "}
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
