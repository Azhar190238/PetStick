
import TransformContent from "@/components/Common/TransformContent";
import Team from "@/components/Home1/Team";
import Health from "@/components/Home1/Health";
import LatestPost from "@/components/home2/LatestPost";
import Review2 from "@/components/home2/Review2";
import ShopPeat from "@/components/home2/ShopPeat";
import ExploreBreads from "@/components/home2/ExploreBreads";
import SellingProduct2 from "@/components/home2/SellingProduct2";
import FeaturesCategories from "@/components/home2/FeaturesCategories";
import LookingFor from "@/components/home2/LookingFor";
import Hero2 from "@/components/home2/Hero2";

export default function Home2() {
  return (
    <div className="bg-[#F7F3EB]">
      <Hero2 />
      <FeaturesCategories />
      <SellingProduct2 />
      <LookingFor />
      <ExploreBreads/>
      <ShopPeat />
      {/* <Health /> */}
      {/* <Team /> */}
      <Review2/>
      <TransformContent bg='/home1/bg.svg' heading='Transform a Life: The Power of Pet Adoption' description="Pet adoption provides a loving home to an animal in need, offering both companionship and fulfillment while helping to reduce shelter overcrowding. It's a meaningful way to make a positive impact." />
      <LatestPost/>
    </div>
  );
}