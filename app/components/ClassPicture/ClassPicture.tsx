import "./ClassPicture.css";
import { useState } from "react";
import BioCard from "../BioCard/BioCard";
import { characters } from "../constants/Characters";
export default function ClassPicture() {
  const [hovered, setHovered] = useState("");
  const [elementClicked, setElementClicked] = useState("");
  const handleSetHovered = (event: React.MouseEvent<HTMLDivElement>) => {
    setHovered((event.currentTarget as HTMLElement)?.id || "");
  };
  const handleMouseLeave = () => {
    if (!elementClicked) {
      setHovered("");
    }
  };
  const handleElementClicked = (event: React.MouseEvent<HTMLDivElement>) => {
    setElementClicked((event.currentTarget as HTMLElement)?.id || "");
  };
  return (
    <>
      {hovered !== "" || elementClicked ? (
        <div className="absolute top-[25%] -right-[40%] z-50">
          <BioCard
            character={characters.find(
              (c) =>
                (elementClicked && c.name === elementClicked) ||
                (!elementClicked && c.name === hovered)
            )}
            menuOpen={false}
          />
        </div>
      ) : null}
      <div className="w-[720px] h-[720px]">
        <div
          id="Peacock"
          className="character bg-[url('/cast/hitbox/PeacockHitbox.webp')] w-[684px] h-[486px]"
          onMouseEnter={handleSetHovered}
          onClick={handleElementClicked}
          onMouseLeave={handleMouseLeave}
        />
        <div
          id="Turtle"
          className="character bg-[url('/cast/hitbox/TurtleHitbox.webp')] w-[197px] h-[348px] translate-x-[170px] translate-y-[196px] scale-[110%]"
          onMouseEnter={handleSetHovered}
          onMouseLeave={handleMouseLeave}
          onClick={handleElementClicked}
        />
        <div
          id="Fox"
          className="character bg-[url('/cast/hitbox/FoxHitbox.webp')] w-[185px] h-[289px] translate-x-[270px] translate-y-[295px] scale-[110%]"
          onMouseEnter={handleSetHovered}
          onMouseLeave={handleMouseLeave}
          onClick={handleElementClicked}
        />
        <div
          id="Bear"
          className="character bg-[url('/cast/hitbox/BearHitbox.webp')] w-[197px] h-[320px] translate-x-[344px] translate-y-[148px]"
          onMouseEnter={handleSetHovered}
          onMouseLeave={handleMouseLeave}
          onClick={handleElementClicked}
        />
        <div
          id="Horse"
          className="character bg-[url('/cast/hitbox/HorseHitbox.webp')] w-[144px] h-[150px] translate-x-[512px] translate-y-[181px]"
          onMouseEnter={handleSetHovered}
          onMouseLeave={handleMouseLeave}
          onClick={handleElementClicked}
        />
        <div
          id="Fish"
          className="character bg-[url('/cast/hitbox/FishHitbox.webp')] w-[164px] h-[197px] translate-x-[150px] translate-y-[348px]"
          onMouseEnter={handleSetHovered}
          onMouseLeave={handleMouseLeave}
          onClick={handleElementClicked}
        />

        <div
          id="Frog"
          className="character bg-[url('/cast/hitbox/FrogHitbox.webp')] w-[123px] h-[199px] translate-x-[405px] translate-y-[355px] scale-[110%]"
          onMouseEnter={handleSetHovered}
          onMouseLeave={handleMouseLeave}
          onClick={handleElementClicked}
        />
        <div
          id="Beaver"
          className="character bg-[url('/cast/hitbox/BeaverHitbox.webp')] w-[143px] h-[188px] translate-x-[500px] translate-y-[310px] scale-[110%]"
          onMouseEnter={handleSetHovered}
          onMouseLeave={handleMouseLeave}
          onClick={handleElementClicked}
        />
      </div>
    </>
  );
}
