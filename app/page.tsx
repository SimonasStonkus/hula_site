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
  PaperPlaneTilt,
  TwitterLogo,
} from "@phosphor-icons/react";

function PageContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const searchParams = useSearchParams();

  const submitEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email) && email.length > 0) {
      console.log("Valid email:", email);
      setSuccess(true);
    } else {
      setError("Please enter a valid email address.");
      const emailInput = document.getElementById("email-input");
      if (emailInput) {
        emailInput.classList.add("motion-preset-shake");
        setTimeout(() => {
          emailInput.classList.remove("motion-preset-shake");
        }, 1000);
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setSuccess(false);
    setError("");
  };

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        submitEmail();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);
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
          <span className="text-orange-400 font-['DynaPuff']">
            Talk with Hula!
          </span>
          <div
            className="bg-[rgba(55,58,71,0.6)] h-8 w-64 rounded-md flex flex-row justify-between pl-2 pr-1 !opacity-100"
            id="email-input"
          >
            <input
              placeholder="Email Address"
              className={`bg-transparent ${
                error ? "text-red-400" : "text-[#b8b7ad]"
              } border-none outline-none w-full max-w-[100%]`}
              type="email"
              value={email}
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
            <div
              onClick={submitEmail}
              className="p-1 cursor-pointer flex justify-end"
            >
              <div className="h-full w-[1px] bg-[#db8776] mr-1" />
              <PaperPlaneTilt color="#ED684D" weight="fill" size="24px" />
            </div>
          </div>

          <span className="text-orange-400 font-['DynaPuff'] text-center max-w-[300px]">
            We&apos;ll also send you updates as we continue to work on the game.
          </span>
          {error ? <span className="text-red-400">{error}</span> : null}
          {success ? (
            <span className="text-green-400">Thanks for signing up!</span>
          ) : null}
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
