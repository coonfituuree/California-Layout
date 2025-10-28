"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "./components/shared/ui/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LookingFor from "./components/shared/ui/LookingFor";
import SaveOnMostSelled from "./components/shared/ui/SaveOnMostSelled";
import TheBest from "./components/shared/ui/TheBest";

const products = [
  {
    title: "The new phones are here take a look.",
    desc: "Discover our latest smartphones with innovative features and stunning design.",
    img: "/iphone.png",
  },
  {
    title: "Powerful laptops for creators.",
    desc: "Experience blazing performance with our next-gen notebooks.",
    img: "/laptop.png",
  },
  {
    title: "Smart watches for your lifestyle.",
    desc: "Stay connected and track your health with style.",
    img: "/watch.png",
  },
  {
    title: "Tablets that do it all.",
    desc: "Perfect balance of power and portability for everyday tasks.",
    img: "/tablet.png",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  const nextSlide = () =>
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  const { title, desc, img } = products[index];

  return (
    <Container className="flex flex-col gap-10">
      <section className="relative w-full max-w-[1294px] h-[550px] bg-[#DCE5E2] rounded-2xl flex items-center justify-between px-14 overflow-hidden transition-all duration-500">
        <div className="flex flex-col gap-6 max-w-[500px] transition-all duration-500 ease-in-out">
          <h1 className="text-[50px] leading-tight">
            {title.split("here")[0]} <br /> {title.split("here")[1]}
          </h1>
          <h3 className="text-[18px] text-gray-700">{desc}</h3>
          <button className="w-[180px] h-[50px] border border-black rounded-full transition-all duration-200 hover:bg-black hover:text-white cursor-pointer">
            Explore
          </button>
        </div>

        <div className="w-[647px] h-[500px] shrink-0 flex justify-center items-center transition-all duration-700 ease-in-out">
          <Image
            key={img}
            src={img}
            alt="product"
            width={1000}
            height={500}
            className="object-contain"
          />
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-1 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-120"
        >
          <ChevronLeft size={40} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-120"
        >
          <ChevronRight size={40} />
        </button>
      </section>
      <SaveOnMostSelled />
      <TheBest />
      <LookingFor />
    </Container>
  );
};

export default Home;
