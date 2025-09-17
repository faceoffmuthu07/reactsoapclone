import AnnouncementBar from "@/components/sections/announcement-bar";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero-section";
import BestSellingProducts from "@/components/sections/best-selling-products";
import AboutStats from "@/components/sections/about-stats";
import OurProductsSection from "@/components/sections/our-products";
import VideoSection from "@/components/sections/video-section";
import BenefitsSection from "@/components/sections/benefits-section";
import InstagramGallery from "@/components/sections/instagram-gallery";
import Testimonials from "@/components/sections/testimonials";
import CategoriesSection from "@/components/sections/categories-section";
import Footer from "@/components/sections/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      
      <main>
        <HeroSection />
        <BestSellingProducts />
        <AboutStats />
        <OurProductsSection />
        <VideoSection />
        <BenefitsSection />
        <InstagramGallery />
        <Testimonials />
        <CategoriesSection />
      </main>
      
      <Footer />
    </div>
  );
}