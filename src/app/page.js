import Image from "next/image";
import Herosection from "../components/Herosection";
import Categories from "@/components/Categories";
import ItemCard from "@/components/ItemCard";
import Faq from "@/components/Faq";
import Howto from "@/components/Howto";


export default function Home() {
  return (
    <div>
      <Herosection />
      <Categories />
      <ItemCard />
      <Howto />
      <Faq />
    </div>
  );
}
