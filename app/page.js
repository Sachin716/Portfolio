import Cards from "@/Components/Cards";
import React from "react";
import Navbar from "@/Components/Navbar";
import Container from "@/Components/Container";
import HeroSection from "@/Components/Hero-section";

export default function Home() {

  const image = null
  return (
    <div className="flex flex-col items-center align-center">
      <Navbar />
      <div className="flex flex-col items-center align-center mt-[50px]">
      <Container />
      </div>
    </div>
  );
}
