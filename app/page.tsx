import HomeAbout from "@/components/homepage/HomeAbout";
import HomeHero from "@/components/homepage/HomeHero";
import HomeServices from "@/components/homepage/HomeServices";


export default function Home() {
  return (
    <div>
      <HomeHero/>
      <HomeAbout/>
      <HomeServices/>
    </div>
  );
}
