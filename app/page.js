import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Skills />
    </>
  );
}
