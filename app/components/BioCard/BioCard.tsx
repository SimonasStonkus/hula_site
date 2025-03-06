import "./BioCard.css";
import Image from "next/image";
import { Character } from "../constants/Characters";
export default function BioCard({
  menuOpen,
  character,
}: {
  menuOpen: boolean;
  character: Character | undefined;
}) {
  return (
    <div
      className={`${
        menuOpen ? "w-[65vw] h-[65vw]" : "w-[300px] h-[300px]"
      } bg-[url(/card_background.webp)] rounded-[15px] flex flex-col justify-center items-center transition-all duration-500 ease-in-out`}
    >
      <div className="relative w-full h-full p-5">
        <Image
          src={character?.profileImage || ""}
          height={menuOpen ? 100 : 150}
          width={menuOpen ? 100 : 150}
          alt={character?.name || ""}
          style={{
            background: "white, linear-gradient(red 0 0)bottom left/ 60% 2px,",
          }}
          className="image-border absolute top-0 left-0 rotate-[-10deg] origin-bottom-right translate-y-[-55%] translate-x-[-10%] rounded-[4px] p-1 transition-all duration-500 ease-in-out"
        />
        <div
          className={`absolute right-0 ${
            menuOpen ? "top-[-34px]" : "top-[-40px]"
          } transition-all duration-500 ease-in-out`}
        >
          <span
            className={`font-['joti_one'] ${
              menuOpen ? "text-[42px]" : "text-[52px]"
            } text-center text-[#632828] font-outline-1 drop-shadow-lg transition-all duration-500 ease-in-out`}
          >
            {character?.name}
          </span>
        </div>
        <div className="w-full flex items-end justify-end">
          <div
            className={`w-[55%] flex flex-col items-start pt-1 ${
              menuOpen ? "gap-1" : "gap-3"
            } transition-all duration-500 ease-in-out`}
          >
            <span
              className={`font-['jua'] text-nowrap ${
                menuOpen ? "text-[14px]" : "text-[18px]"
              } text-center text-[#DB2B05] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-500 ease-in-out`}
            >
              Zodiac: {character?.zodiac}
            </span>
            <span
              className={`font-['jua'] ${
                menuOpen ? "text-[14px]" : "text-[18px]"
              } text-center text-black drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-500 ease-in-out`}
            >
              Pet peeve: {character?.dislikes}
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center h-[1px] pt-4">
          <div className="w-[75%] border-t-[2px] border-dashed border-[#DB2B05]" />
        </div>
        <div className="w-full h-full">
          <span
            className={`font-['inter'] transition-all duration-500 ease-in-out ${
              menuOpen ? "text-[32px]" : "text-[40px]"
            } text-[#632828]`}
          >
            Bio: {character?.bio}
          </span>
        </div>
      </div>
    </div>
  );
}
