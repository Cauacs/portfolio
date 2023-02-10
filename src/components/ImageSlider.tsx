import { useState } from "react";

type props = {
  slides: { url: string }[];
};

export const ImageSlider = ({ slides }: props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const url = slides[currentIndex]?.url;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (url === undefined) {
    return <div>missing image</div>;
  }
  return (
    <div className="relative h-full">
      <div
        className="absolute top-1/2 left-8 z-[1] -translate-y-1/2 cursor-pointer text-4xl text-text"
        onClick={goToPrevious}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-10 w-10 text-pine"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        className="absolute top-1/2 right-8 z-[1] -translate-y-1/2 cursor-pointer text-4xl text-text"
        onClick={goToNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-10 w-10 text-pine"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="h-full w-full rounded bg-cover bg-center"
      />
    </div>
  );
};
