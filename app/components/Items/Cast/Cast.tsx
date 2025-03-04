import { BioCarousel } from "../../BioCarousel/BioCarousel";

export default function Cast({ menuOpen }: { menuOpen: boolean }) {
  return (
    <div className="flex flex-col items-center motion-preset-pop justify-center h-full w-full pt-20 relative z-1">
      <span className="text-orange-400 font-['Jua'] text-[40px] pb-20">
        Cast
      </span>
      <BioCarousel menuOpen={menuOpen} />
    </div>
  );
}
