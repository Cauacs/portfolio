import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <div>Hello</div>
    </>
  );
};

export default Home;

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://raw.githubusercontent.com/catppuccin/wallpapers/main/minimalistic/dark-cat.png)",
      }}
    >
      <div className="py-32 text-center text-white ">
        <h1 className="mb-4 text-3xl font-bold">Welcome to my website</h1>
        <p className="text-lg">Learn more about me and my projects</p>
      </div>
    </div>
  );
};
