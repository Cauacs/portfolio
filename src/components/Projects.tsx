import { Button } from "./Button";
import { Card } from "./Card";
import { ImageSlider } from "./ImageSlider";

import { env } from "../env/client.mjs";

const url = env.NEXT_PUBLIC_ROOT_URL;

export const Projects = () => {
  const cfUrls = [
    { url: url + "/cf-posts.png" },
    { url: url + "cf-post.png" },
    { url: url + "cf-signin.png" },
    { url: url + "cf-signup.png" },
    { url: url + "cf-urls.png" },
  ];

  const qnUrls = [{ url: url + "/qn-1.png" }, { url: url + "/qn-2.png" }];

  const ergoUrls = [
    { url: url + "/ergo-checklist.jpeg" },
    { url: url + "/ergo-aval.jpeg" },
    { url: url + "/ergo-perguntas.jpeg" },
    { url: url + "/ergo-cad.jpeg" },
    { url: url + "/ergo-login.jpeg" },
  ];

  return (
    <div className="flex flex-grow flex-col items-center justify-center bg-base py-10 font-text">
      <span className="mb-20 text-4xl text-text">
        <strong>~/about/projects</strong>
      </span>
      <div>
        <div className="mt-5 h-[600px] w-[1000px]">
          <ImageSlider slides={qnUrls} />
        </div>
        <div className="w-[1000px] p-1 text-text">
          QuickNote is a minimalist WYSIWYG (What You See Is What You Get) rich
          text editor with shortcuts built with{" "}
          <a
            href="https://docs.slatejs.org/"
            className="text-pine"
            target="_blank"
            rel="noreferrer"
          >
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
          <Button str="Code" link="https://github.com/Cauacs/super-waffle" />
          <Button str="Live Demo" link="https://quick-note-xi.vercel.app/" />
        </div>
      </div>
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
          <Button str="Code" link="https://github.com/Cauacs/comfyreader" />
        </div>
      </div>

      <div className="mt-5 h-[600px] w-[1000px]">
        <ImageSlider slides={ergoUrls} />
      </div>
      <div className="w-[1000px] p-1 text-text">
        Ergolist is web application that revives the old version of{" "}
        <a
          href="https://web.archive.org/web/20050206143858/http://www.labiutil.inf.ufsc.br/ergolist/"
          className="text-pine"
          target="_blank"
          rel="noreferrer"
        >
          Ergolist
        </a>{" "}
        developed by{" "}
        <a
          href="https://web.archive.org/web/20050206073849/http://www.labiutil.inf.ufsc.br/"
          className="text-pine"
          target="_blank"
          rel="noopener noreferrer"
        >
          LabUtil
        </a>
        . The purpose of the application is to provide a checklist to help web
        developers to create better UIs. It was developed by me and my
        classmates from college.
      </div>
      <div className="flex flex-row-reverse">
        <Card language="JavaScript" color="overlay" />
        <Card language="Express" color="overlay" />
        <Card language="ReactJS" color="overlay" />
        <Card language="REST" color="overlay" />
        <Card language="MongoDB" color="overlay" />
        <Card language="Mongoose" color="overlay" />
        <Card language="JWT" color="overlay" />
        <Button
          str="Code"
          link="https://github.com/FatecFranca/DSM-G06-PI3-2022-1"
        />
      </div>
    </div>
  );
};
