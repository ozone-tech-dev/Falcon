import Image from "next/image";
import { Templates } from "@/components/global/Templates";
import { About } from "@/components/global/About";
export default function Home() {
  return (
    <div >
      <Templates/>
      <About/>
    </div>
  );
}
