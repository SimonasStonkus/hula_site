import Image from "next/image";
export default function Background() {
  return (
    <div className="w-screen h-screen max-w-screen max-h-screen absolute overflow-hidden pointer-events-none">
      <Image
        src="/backgroundElements/forest_bg.webp"
        alt="Forest background"
        fill
        style={{ objectFit: "cover" }}
        className="background motion-scale-x-loop-[101%] motion-duration-[12000ms] motion-ease-in-out"
        quality={90}
      />

      <Image
        src="/backgroundElements/grass_bg.webp"
        alt="Grass background"
        fill
        style={{ objectFit: "cover" }}
        className="background motion-scale-x-loop-[102%] motion-duration-[8000ms] motion-ease-in-out motion-delay-[3000ms]"
        quality={90}
      />
      <Image
        src="/backgroundElements/forest_fore.webp"
        alt="Forest foreground"
        fill
        style={{ objectFit: "cover" }}
        className="background motion-translate-x-loop-[5px] motion-scale-x-loop-[102%] motion-scale-y-loop-[101%] motion-duration-[12000ms] motion-ease-in-out"
        quality={90}
      />
      <Image
        src="/backgroundElements/grass_mid.webp"
        alt="Grass middle"
        fill
        style={{ objectFit: "cover" }}
        className="background motion-scale-x-loop-[102%] motion-duration-[8000ms] motion-ease-in-out"
        priority
        quality={90}
      />
      <Image
        src="/backgroundElements/grass_fore.webp"
        alt="Grass foreground"
        fill
        style={{ objectFit: "cover" }}
        className="background motion-scale-x-loop-[102%] motion-duration-[8000ms] motion-ease-in-out motion-delay-[6000ms]"
        priority
        quality={90}
      />
      <Image
        src="/backgroundElements/grass_flowers_bg.webp"
        alt="Grass flowers background"
        fill
        style={{ objectFit: "cover" }}
        className="background motion-translate-x-loop-[5px] motion-duration-[8000ms] motion-ease-in-out motion-delay-[4000ms]"
        quality={90}
      />
      <Image
        src="/backgroundElements/grass_flowers_mid.webp"
        alt="Grass flowers middle"
        fill
        style={{ objectFit: "cover" }}
        className="background motion-translate-x-loop-[7px] motion-duration-[8000ms] motion-ease-in-out motion-delay-[1000ms]"
        quality={90}
      />
      <Image
        src="/backgroundElements/grass_flowers_fore.webp"
        alt="Grass flowers foreground"
        fill
        style={{ objectFit: "cover" }}
        className="background motion-translate-x-loop-[10px] motion-duration-[8000ms] motion-ease-in-out motion-delay-[7000ms]"
        quality={90}
      />
      <Image
        src="/backgroundElements/Light_Rays_Layer.webp"
        alt="Light rays layer"
        fill
        style={{ objectFit: "cover" }}
        className="background motion-scale-x-loop-[105%] motion-duration-[12000ms] motion-ease-in-out"
        quality={20}
      />
      <Image
        src="/backgroundElements/Shadows_Layer.webp"
        alt="Shadows layer"
        fill
        style={{ objectFit: "cover" }}
        className="background motion-scale-x-loop-[110%] motion-duration-[12000ms] motion-ease-in-out"
        quality={20}
      />
    </div>
  );
}
