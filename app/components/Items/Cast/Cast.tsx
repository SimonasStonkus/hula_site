import BioCard from "../../BioCard/BioCard";

export default function Cast() {
  return (
    <div className="flex flex-col items-center motion-preset-pop justify-center h-full w-full pt-20">
      <span className="text-orange-400 font-['Jua'] text-[40px] pb-20">
        Cast
      </span>
      <BioCard />
    </div>
  );
}
