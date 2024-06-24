import Companies from "@/components/Companies";
import DeelRequest from "@/components/DeelRequest";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroPage from "@/components/HeroPage";
import RecentDeels from "@/components/RecentDeels";
import Subscribe from "@/components/Subscribe";
import Testimonials from "@/components/Testimonials";
import TopOffers from "@/components/TopOffers";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mb-32">
      <Header />
      </div>
      <div className="max-w-6xl m-auto px-4">
        <HeroPage />
        <RecentDeels />
        <TopOffers />
        <DeelRequest />
        <Testimonials />
        <Companies />
        <Subscribe />
      </div>
        <Footer />
    </>
  );
}
