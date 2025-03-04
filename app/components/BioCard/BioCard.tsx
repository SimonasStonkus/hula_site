import "./BioCard.css";
import Image from "next/image";

export default function BioCard() {
  return (
    <div className="w-[300px] h-[300px] bg-[#ffface] rounded-[15px] flex flex-col justify-center items-center">
      <div className="relative w-full h-full p-5">
        <Image
          src="/cast/huxley.webp"
          height={150}
          width={150}
          alt="huxley"
          style={{
            background: "white, linear-gradient(red 0 0)bottom left/ 60% 2px,",
          }}
          className="image-border absolute top-0 left-0 rotate-[-10deg] origin-bottom-right translate-y-[-55%] translate-x-[-10%] rounded-[4px] p-1"
        />
        <div className="absolute right-0 top-[-40px]">
          <span className="font-['joti_one'] text-[52px] text-center text-[#632828] font-outline-1 drop-shadow-lg">
            Huxley
          </span>
        </div>
        <div className="w-full flex items-end justify-end">
          <div className="w-[55%] flex flex-col items-start pt-1 gap-3">
            <span className="font-['jua'] text-[18px] text-center text-[#DB2B05] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              Likes:
            </span>
            <span className="font-['jua'] text-[18px] text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              Dislikes:
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center h-[1px] pt-4">
          <div className="w-[75%] border-t-[2px] border-dashed border-[#DB2B05]" />
        </div>
        <div className="w-full h-full">
          <span className="font-['inter'] text-[40px] text-[#632828]">Bio</span>
        </div>
      </div>
    </div>
  );
}
