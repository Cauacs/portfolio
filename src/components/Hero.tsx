import TypewriterComponent from "typewriter-effect";

export const Hero = () => {
  return (
    <section
      id="Hero"
      className="flex h-screen flex-col items-center justify-center bg-base  bg-cover bg-center"
    >
      <div className="w-1/4 py-32 text-left font-text text-3xl text-rose ">
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .typeString("<strong>hey there, i'm Cauã!</strong> ")
              .pauseFor(200)
              .typeString("<br/><strong> i'm software developer.</strong>")
              .start();
          }}
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6 text-rose"
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
