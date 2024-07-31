import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";

export default function Home() {
  return (
    <main>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
