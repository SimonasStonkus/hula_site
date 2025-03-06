import useEmblaCarousel from "embla-carousel-react";
import BioCard from "../BioCard/BioCard";
import "./BioCarousel.css";
import { characters } from "../constants/Characters";
import { DotButton, useDotButton } from "./CarouselButtons";
export function BioCarousel({ menuOpen }: { menuOpen: boolean }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
  });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {characters.map((character) => {
            return (
              <div className="embla__slide" key={character.name}>
                <BioCard menuOpen={menuOpen} character={character} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </>
  );
}
