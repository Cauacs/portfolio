import { Card } from "./Card";

const languages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C/C++",
  "SQL",
];
const frameworks = ["NextJS", "ReactJS", "Express", "Spring Boot"];
const tools = ["Git", "Docker", "NodeJS", "npm/yarn"];
const standarts_paradigms = ["OpenAPI", "REST", "GraphQL", "gRPC/tRPC"];
const snappy = ["Linux", "Emacs", "Vim/Neovim"];

//TODO: add some icons

export const About = () => {
  return (
    <section id="About" className="flex flex-col items-center bg-base bg-cover">
      <div className="m-auto max-w-4xl rounded-3xl bg-overlay p-10 font-text text-xl text-text">
        <span className="text-4xl">
          <strong>~/about/tech</strong>
        </span>
        <p className="my-5">
          I am an aspiring web developer based in Brazil thats passionate about
          free and open-source software, unix based operating system and text
          editors.
        </p>
        <p>This is my tech stack:</p>

        <p className="mt-7 text-rose">Languages</p>
        <br />
        {languages.map((lang, key) => (
          <Card key={key} language={lang} />
        ))}
        <p className="mt-7 text-rose">Frameworks</p>
        <br />
        {frameworks.map((framework, key) => (
          <Card key={key} language={framework} />
        ))}
        <p className="mt-7 text-rose">Tools</p>
        <br />
        {tools.map((tool, key) => (
          <Card language={tool} key={key} />
        ))}
        <p className="mt-7 text-rose">Standarts & paradigms</p>
        <br />
        {standarts_paradigms.map((standart, key) => (
          <Card language={standart} key={key} />
        ))}
        <p className="mt-7 text-rose">Other snappy stuff</p>
        <br />
        {snappy.map((value, key) => (
          <Card language={value} key={key} />
        ))}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="my-5 h-6 w-6 text-rose"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </section>
  );
};
