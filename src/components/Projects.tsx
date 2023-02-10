import { Button } from "./Button";
import { Card } from "./Card";
import { ImageSlider } from "./ImageSlider";

export const Projects = () => {
  const cfUrls = [
    { url: "http://localhost:3000/cf-posts.png" },
    { url: "http://localhost:3000/cf-post.png" },
    { url: "http://localhost:3000/cf-signup.png" },
    { url: "http://localhost:3000/cf-signin.png" },
    { url: "http://localhost:3000/cf-urls.png" },
  ];

  const qnUrls = [
    { url: "http://localhost:3000/qn-1.png" },
    { url: "http://localhost:3000/qn-2.png" },
  ];

  const ergoUrls = [
    { url: "http://localhost:3000/ergo-checklist.jpeg" },
    { url: "http://localhost:3000/ergo-aval.jpeg" },
    { url: "http://localhost:3000/ergo-perguntas.jpeg" },
    { url: "http://localhost:3000/ergo-cad.jpeg" },
    { url: "http://localhost:3000/ergo-login.jpeg" },
  ];

  return (
    <div className="flex flex-grow flex-col items-center justify-center bg-base py-10 font-text">
      <span className="mb-20 text-4xl text-text">
        <strong>~/about/projects</strong>
      </span>
      <div>
        <div className="mt-5 h-[600px] w-[1000px]">
          <ImageSlider slides={cfUrls} />
        </div>
        <div className="w-[1000px] p-1 text-text">
          ComfyReader is a rss feed reader. It works by taking an url to an rss
          feed an saving it to an user account.
        </div>
        <div className="flex flex-row-reverse">
          <Card language="Java" color="overlay" />
          <Card language="Spring Boot" color="overlay" />
          <Card language="JavaScript" color="overlay" />
          <Card language="ReactJS" color="overlay" />
          <Card language="MongoDB" color="overlay" />
          <Card language="REST" color="overlay" />
          <Button str="Code" />
        </div>
      </div>
      <div>
        <div className="mt-5 h-[600px] w-[1000px]">
          <ImageSlider slides={qnUrls} />
        </div>
        <div className="w-[1000px] p-1 text-text">
          QuickNote is a minimalist WYSIWYG (What You See Is What You Get) rich
          text editor with shortcuts built with{" "}
          <a href="https://docs.slatejs.org/" className="text-pine">
            <u>SlateJS</u>
          </a>
        </div>
        <div className="flex flex-row-reverse">
          <Card language="TypeScript" color="overlay" />
          <Card language="NextJS" color="overlay" />
          <Card language="ReactJS" color="overlay" />
          <Card language="GraphQL" color="overlay" />
          <Card language="Apollo" color="overlay" />
          <Card language="Prisma" color="overlay" />
          <Card language="NexusJS" color="overlay" />
          <Button str="Code" />
          <Button str="Live Demo" />
        </div>
      </div>
      <div className="mt-5 h-[600px] w-[1000px]">
        <ImageSlider slides={ergoUrls} />
      </div>
      <div className="w-[1000px] p-1 text-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        minima ab commodi inventore repellendus ducimus perspiciatis placeat
        neque obcaecati, praesentium optio alias minus rerum et sint odit
        reiciendis explicabo laboriosam.
      </div>
    </div>
  );
};
