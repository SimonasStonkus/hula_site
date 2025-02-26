"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import DesktopBurgerMenu from "./components/DesktopBurgerMenu/DesktopBurgerMenu";
import Link from "next/link";
import { DiscordLogo, InstagramLogo, TwitterLogo } from "@phosphor-icons/react";

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
      className={`bg-[url('/hula.webp')] !duration-[300ms] bg-cover bg-no-repeat ${
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
                <InstagramLogo size="24px" color="#fdba74" weight="fill" />
              </Link>
              <Link href="https://twitter.com">
                <TwitterLogo size="24px" color="#fdba74" weight="fill" />
              </Link>
              <Link href="https://discord.gg/hula">
                <DiscordLogo size="24px" color="#fdba74" weight="fill" />
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
        className={`flex flex-col items-center min-h-screen p-16 ${
          menuOpen ? "w-[calc(100%-100px)]" : "w-full"
        }`}
      >
        <div className="flex justify-center items-start w-full">
          <h1 className="text-orange-300 text-[40px]">Hula</h1>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="bg-[url('/hula.webp')] bg-cover bg-no-repeat bg-[100%]" />
      }
    >
      <PageContent />
    </Suspense>
  );
}
