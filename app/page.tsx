import Setup from "../components/Setup"
import ModernTemplate from "../components/ModernTemplate"
import Hero from "../components/Hero"
import Client from "../components/Clients"
import WhyChooseUs from "@/components/WhyChooseUs"
import DigitalBusiness from "@/components/DigitalBusiness"
import Pricing from "@/components/Pricing"
import FeaturedUsers from "@/components/FeaturedUsers"
import Testimony from "@/components/Testimony"
import Blog from "@/components/Blog"
import CreateWebsite from "@/components/CreateYourWebsite"

export default function Home() {
  return (
    <main className="bg-">
      <Hero />
      <Client />
      <Setup />
      <ModernTemplate />
      <WhyChooseUs />
      <DigitalBusiness />
      <Pricing />
      <FeaturedUsers />
      <Testimony />
      <Blog />
      <CreateWebsite />
    </main>

  );
}
