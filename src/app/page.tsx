import AboutUsComponent from "@/components/home/AboutUs/AboutUs.component";
import CarouselComponent from "@/components/home/Carousel/Carousel.component";
import CompanyDescriptionComponent from "@/components/home/CompanyDescription/CompanyDescription.component";
import GalleryComponent from "@/components/home/Gallery/Gallery.component";
import SubgroupComponent from "@/components/home/SubGroup/Subgroup.component";
import TestimonialsComponent from "@/components/home/Testimonials/Testimonials.component";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[100%] ">
      <section className="h-[100vh] w-[100vw] relative">
        <CarouselComponent />
      </section>
      <AboutUsComponent />
      <CompanyDescriptionComponent />
      <GalleryComponent />
      <SubgroupComponent />
      <TestimonialsComponent />
    </main>
  );
}
