import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FirstSection from "./components/FirstSection/FirstSection";
export default function Home() {
  return (
  <div>
    <Navbar/>
     <FirstSection />
    <Footer/>
  </div>

  );
}
 