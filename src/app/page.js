import Image from "next/image";
import Herosection from "../components/Herosection";
import Categories from "@/components/Categories";
export default function Home() {
  return (
    <div>
      <Herosection/>
      <Categories/>
    </div>
  );
}
