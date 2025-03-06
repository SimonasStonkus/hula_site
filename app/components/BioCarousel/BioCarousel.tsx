import useEmblaCarousel from "embla-carousel-react";
import BioCard from "../BioCard/BioCard";
import "./BioCarousel.css";
import { characters } from "../constants/Characters";
export function BioCarousel({ menuOpen }: { menuOpen: boolean }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: false });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <BioCard menuOpen={menuOpen} character={characters[0]} />
        </div>
        <div className="embla__slide">
          <BioCard menuOpen={menuOpen} character={characters[1]} />
        </div>
        <div className="embla__slide">
          <BioCard menuOpen={menuOpen} character={characters[2]} />
        </div>
      </div>
    </div>
  );
}
