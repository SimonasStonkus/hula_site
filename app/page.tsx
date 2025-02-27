"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import DesktopBurgerMenu from "./components/DesktopBurgerMenu/DesktopBurgerMenu";
import Link from "next/link";
import Image from "next/image";
import {
  DiscordLogo,
  HandPointing,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Hula from "./components/Items/Hula/Hula";
import Game from "./components/Items/Game/Game";
import Cast from "./components/Items/Cast/Cast";
import Studio from "./components/Items/Studio/Studio";

function PageContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setMenuOpen(false);
      setDesktopMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="outer-container"
      className={`bg-[url('/hula_background.webp')] !duration-[300ms] bg-cover bg-no-repeat ${
        isMobile ? (menuOpen ? "bg-[78%]" : "bg-[80%] w-full") : "bg-[100%]"
      }`}
    >
      {isMobile ? (
        <>
          <BurgerMenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            selectedItem={searchParams.get("item")}
          />
          <div className="absolute top-0 right-0 p-4">
            <div className="flex gap-2 items-start w-full justify-start">
              <Link href="https://instagram.com">
                <InstagramLogo size="24px" color="#ED684D" weight="fill" />
              </Link>
              <Link href="https://twitter.com">
                <TwitterLogo size="24px" color="#ED684D" weight="fill" />
              </Link>
              <Link href="https://discord.gg/hula">
                <DiscordLogo size="24px" color="#ED684D" weight="fill" />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <DesktopBurgerMenu
          desktopMenuOpen={desktopMenuOpen}
          setDesktopMenuOpen={setDesktopMenuOpen}
          selectedItem={searchParams.get("item")}
        />
      )}

      <div
        id="page-wrap"
        className={`flex flex-col items-center min-h-screen ${
          menuOpen ? "w-[calc(100%-100px)] p-6 pt-10" : "w-full  p-14"
        }`}
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div className="relative">
            <Image
              src="/hula_logo.webp"
              height={466}
              width={466}
              alt="Hula logo"
              className={`${menuOpen ? "translate-x-3" : "translate-x-6"}`}
            />
            <Link
              href="https://kickstarter.com"
              target="_blank"
              className="absolute bg-transparent aspect-square w-[25%] max-w-[120px] top-[28%] right-[6%] z-10 cursor-pointer"
            >
              {" "}
              <HandPointing
                color="#ED684D"
                weight="duotone"
                size="32px"
                className="absolute top-[70%] right-[-30%] origin-bottom-right -rotate-45 duocolor-fill motion-preset-wobble motion-translate-y-in-50 motion-translate-y-out-50 motion-translate-y-loop motion-duration-1000"
              />
            </Link>
          </div>
          {searchParams.get("item") === "hula" || !searchParams.get("item") ? (
            <Hula />
          ) : null}
          {searchParams.get("item") === "game" ? <Game /> : null}
          {searchParams.get("item") === "cast" ? <Cast /> : null}
          {searchParams.get("item") === "studio" ? <Studio /> : null}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="bg-[url('/hula_background.webp')] bg-cover bg-no-repeat bg-[100%]" />
      }
    >
      <PageContent />
    </Suspense>
  );
}
