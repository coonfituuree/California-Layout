"use client";
import Container from "./components/shared/ui/Container";
import LookingFor from "./components/shared/ui/LookingFor";
import SaveOnMostSelled from "./components/shared/ui/SaveOnMostSelled";
import TheBest from "./components/shared/ui/TheBest";
import Explore from "./components/shared/ui/Explore";
import LatestOffer from "./components/shared/ui/LatestOffer";
import IdeasHave from "./components/shared/ui/IdeasHave";

const Home = () => {
  return (
    <Container className="flex flex-col gap-10">
      <Explore />
      <LatestOffer />
      <SaveOnMostSelled />
      <TheBest />
      <IdeasHave />
      <LookingFor />
    </Container>
  );
};

export default Home;
