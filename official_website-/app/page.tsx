import AboutUs from "./components/AboutUs";
import DownloadAppSection from "./components/DownloadAppSection";
import GallerySection from "./components/GallerySection";
import Hero from "./components/Hero";

export default function Page() {
  return (
    <main className="min-h-screen bg-ivory">
      <Hero />
      <GallerySection />
      <DownloadAppSection />
      <AboutUs />
    </main>
  );
}
