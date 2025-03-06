import useEmblaCarousel from "embla-carousel-react";
import BioCard from "../BioCard/BioCard";
import "./BioCarousel.css";
import { characters } from "../constants/Characters";
export function BioCarousel({ menuOpen }: { menuOpen: boolean }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: false });

  return (
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
  );
}
