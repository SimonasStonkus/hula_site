import Image from "next/image";
export default function Background() {
  return (
    <div className="w-screen h-screen max-w-screen max-h-screen absolute overflow-hidden pointer-events-none">
      <Image
        src="/backgroundElements/forest_bg.webp"
        alt="Forest background"
        fill
        style={{
          objectFit: "cover",
          zIndex: 1,
          position: "absolute",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        className="background motion-scale-x-loop-[101%] motion-duration-[12000ms] motion-ease-in-out"
        quality={100}
      />

      <Image
        src="/backgroundElements/grass_bg.webp"
        alt="Grass background"
        fill
        style={{
          objectFit: "cover",
          zIndex: 2,
          position: "absolute",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        className="background motion-scale-x-loop-[102%] motion-duration-[8000ms] motion-ease-in-out motion-delay-[3000ms]"
        quality={100}
      />
      <Image
        src="/backgroundElements/forest_fore.webp"
        alt="Forest foreground"
        fill
        style={{
          objectFit: "cover",
          zIndex: 3,
          position: "absolute",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        className="background motion-translate-x-loop-[5px] motion-scale-x-loop-[102%] motion-scale-y-loop-[101%] motion-duration-[12000ms] motion-ease-in-out"
        quality={100}
      />
      <Image
        src="/backgroundElements/grass_mid.webp"
        alt="Grass middle"
        fill
        style={{
          objectFit: "cover",
          zIndex: 5,
          position: "absolute",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        className="background motion-scale-x-loop-[102%] motion-duration-[8000ms] motion-ease-in-out"
        priority
        quality={100}
      />
      <Image
        src="/backgroundElements/grass_fore.webp"
        alt="Grass foreground"
        fill
        style={{
          objectFit: "cover",
          zIndex: 5,
          position: "absolute",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        className="background motion-scale-x-loop-[102%] motion-duration-[8000ms] motion-ease-in-out motion-delay-[6000ms]"
        priority
        quality={100}
      />
      <Image
        src="/backgroundElements/grass_flowers_bg.webp"
        alt="Grass flowers background"
        fill
        style={{
          objectFit: "cover",
          zIndex: 6,
          position: "absolute",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        className="background motion-translate-x-loop-[5px] motion-duration-[8000ms] motion-ease-in-out motion-delay-[4000ms]"
        quality={100}
      />
      <Image
        src="/backgroundElements/grass_flowers_mid.webp"
        alt="Grass flowers middle"
        fill
        style={{
          objectFit: "cover",
          zIndex: 7,
          position: "absolute",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        className="background motion-translate-x-loop-[7px] motion-duration-[8000ms] motion-ease-in-out motion-delay-[1000ms]"
        quality={100}
      />
      <Image
        src="/backgroundElements/grass_flowers_fore.webp"
        alt="Grass flowers foreground"
        fill
        style={{
          objectFit: "cover",
          zIndex: 8,
          position: "absolute",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        className="background motion-translate-x-loop-[10px] motion-duration-[8000ms] motion-ease-in-out motion-delay-[7000ms]"
        quality={100}
      />
      <Image
        src="/backgroundElements/Light_Rays_Layer.webp"
        alt="Light rays layer"
        fill
        style={{
          objectFit: "cover",
          zIndex: 9,
          position: "absolute",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        className="background motion-scale-x-loop-[105%] motion-duration-[12000ms] motion-ease-in-out"
        quality={20}
      />
      <Image
        src="/backgroundElements/Shadows_Layer.webp"
        alt="Shadows layer"
        fill
        style={{
          objectFit: "cover",
          zIndex: 10,
          position: "absolute",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        className="background motion-scale-x-loop-[110%] motion-duration-[12000ms] motion-ease-in-out"
        quality={20}
      />
    </div>
  );
}
