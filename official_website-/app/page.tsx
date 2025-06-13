import AboutUs from "./components/AboutUs";
import DownloadAppSection from "./components/DownloadAppSection";
import GallerySection from "./components/GallerySection";
import Hero from "./components/Hero";


export default function page() {
  return (
   <div className="bg-gray-100 min-h-screen">
    {/* Main page  nnnf*/}
   <Hero/>
   <GallerySection/>
   <DownloadAppSection/>
   <AboutUs/>
   </div>
  
  );
}
