import Image from "next/image";
import { Templates } from "@/components/global/Templates";
import { About } from "@/components/global/About";
import { Galleries } from "@/components/global/Galleries";
export default function Home() {
  return (
    <div >
      <Templates/>
      <About/>
      <Galleries/>
    </div>
  );
}
