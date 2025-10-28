"use client";
import Container from "./components/shared/ui/Container";
import LookingFor from "./components/shared/ui/LookingFor";
import SaveOnMostSelled from "./components/shared/ui/SaveOnMostSelled";
import TheBest from "./components/shared/ui/TheBest";
import Explore from "./components/shared/ui/Explore";

const Home = () => {
  return (
    <Container className="flex flex-col gap-10">
      <Explore />
      <SaveOnMostSelled />
      <TheBest />
      <LookingFor />
    </Container>
  );
};

export default Home;
