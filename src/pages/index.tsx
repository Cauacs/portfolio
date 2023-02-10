import { type NextPage } from "next";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
