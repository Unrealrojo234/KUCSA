import "./Projects.css";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Projects() {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="container-fluid">
      <h1 className="keys text-center">Projects</h1>
      <p>
        These are some of our members' open source projects that they have
        dedicated thier time, effort and joint collaboration to create
      </p>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>
      <br />
    </div>
  );
}
