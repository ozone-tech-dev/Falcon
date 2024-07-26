import Setup from "../components/Setup"
import ModernTemplate from "../components/ModernTemplate"
import Hero from "../components/Hero"
import Client from "../components/Clients"
import WhyChooseUs from "@/components/WhyChooseUs"
import DigitalBusiness from "@/components/DigitalBusiness"
import Pricing from "@/components/Pricing"

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
    </main>

  );
}
