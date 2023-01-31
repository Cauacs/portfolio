import { type NextPage } from "next";
import { Hero } from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <div className="bg-base">hello</div>
    </>
  );
};

export default Home;
