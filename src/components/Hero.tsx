import TypewriterComponent from "typewriter-effect";

export const Hero = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-base bg-pattern bg-cover bg-center">
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
    </div>
  );
};
