"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import DesktopBurgerMenu from "./components/DesktopBurgerMenu/DesktopBurgerMenu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DiscordLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";
import Hula from "./components/Items/Hula/Hula";
import Game from "./components/Items/Game/Game";
import Cast from "./components/Items/Cast/Cast";
import Studio from "./components/Items/Studio/Studio";
import Image from "next/image";
function PageContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    setIsMobile(window.innerWidth < 1200);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
      setMenuOpen(false);
      setDesktopMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("item")]);

  useEffect(() => {
    if (!desktopMenuOpen) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desktopMenuOpen]);

  return (
    <div
      id="outer-container"
      className={`!duration-[300ms] bg-cover bg-no-repeat z-[500] overflow-hidden relative w-screen h-screen`}
    >
      <div className="z-10 relative">
        {isMobile ? (
          <>
            <BurgerMenu
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              selectedItem={searchParams.get("item")}
            />
            <div className="absolute top-0 right-0 p-4">
              <div className="flex gap-2 items-start w-full justify-start">
                <Link href="https://instagram.com" target="_blank">
                  <InstagramLogo size="24px" color="#ED684D" weight="fill" />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <TwitterLogo size="24px" color="#ED684D" weight="fill" />
                </Link>
                <Link href="https://discord.gg/hula" target="_blank">
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
      </div>
      <div
        id="page-wrap"
        className={`flex flex-col items-center justify-between min-h-screen z-[9] ${
          menuOpen ? "w-[calc(100%-115px)] p-6 pt-10" : "w-full p-14"
        }`}
      >
        <div className="flex flex-col justify-center items-center w-full h-full relative z-9">
          {searchParams.get("item") === "hula" || !searchParams.get("item") ? (
            <Hula menuOpen={menuOpen} />
          ) : null}
          {searchParams.get("item") === "game" ? <Game /> : null}
          {searchParams.get("item") === "cast" ? (
            <Cast menuOpen={menuOpen} />
          ) : null}
          {searchParams.get("item") === "studio" ? <Studio /> : null}
        </div>
        {searchParams.get("item") === "hula" || !searchParams.get("item") ? (
          <div className="flex items-end justify-end w-full motion-preset-pop">
            <Image
              src="/backgroundElements/Hula_Shadow_Combined.webp"
              height={250}
              width={250}
              priority
              quality={100}
              alt="Hula"
              className="background !relative"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="" />}>
      <PageContent />
    </Suspense>
  );
}
