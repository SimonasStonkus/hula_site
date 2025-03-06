import { BioCarousel } from "../../BioCarousel/BioCarousel";
import ClassPicture from "../../ClassPicture/ClassPicture";
import Hula from "../Hula/Hula";

export default function Cast({
  menuOpen,
  isMobile,
}: {
  menuOpen: boolean;
  isMobile: boolean;
}) {
  return (
    <div className="items-center justify-center w-full flex flex-col">
      <div className="w-full flex items-end md:justify-end justify-center px-0 md:px-16 -mt-8">
        <div className="w-[150px] h-[150px] z-0">
          <Hula menuOpen={menuOpen} />
        </div>
      </div>
      <div className="motion-preset-pop flex flex-col justify-center items-center pt-14 relative z-1">
        <span className="text-orange-400 font-['Jua'] text-[40px] pb-5 -mb-8">
          Cast
        </span>
        {isMobile ? <BioCarousel menuOpen={menuOpen} /> : <ClassPicture />}
      </div>
    </div>
  );
}
