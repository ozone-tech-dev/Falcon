import Image from "next/image";
import { Templates } from "@/components/global/Templates";
import { About } from "@/components/global/About";
import { Galleries } from "@/components/global/Galleries";
import { Priceing } from "@/components/global/Priceing";
import { LowerFooter } from "@/components/global/LowerFooter";
export default function Home() {
  return (
    <div >
      <Templates/>
      <About/>
      <Galleries/>
      <Priceing/>
      <LowerFooter/>
    </div>
  );
}
