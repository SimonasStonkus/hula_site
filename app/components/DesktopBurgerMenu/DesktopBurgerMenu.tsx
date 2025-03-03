import Link from "next/link";
import "../BurgerMenu/burgerMenu.css";
import { InstagramLogo, DiscordLogo } from "@phosphor-icons/react";
import Image from "next/image";
export default function DesktopBurgerMenu({
  desktopMenuOpen,
  setDesktopMenuOpen,
  selectedItem,
}: {
  desktopMenuOpen: boolean;
  setDesktopMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: string | null;
}) {
  return (
    <div className="z-[1000]">
      <div
        className={`w-[300px] h-[600px] pt-16 bg-[url('/menu_background.webp')] rounded-[50px] bg-cover bg-center bg-no-repeat p-4 fixed left-[100px] top-[158px] ${
          desktopMenuOpen
            ? "opacity-100 scale-y-100 scale-x-100"
            : "opacity-0 scale-y-0 scale-x-0 translate-y-[-30px] translate-x-[10px]"
        } transition-all duration-300 transform origin-[40%_5%]`}
      >
        <div className="relative flex flex-col gap-10 items-center">
          <Link
            id="hula"
            className={`menu-item px-2 font-['Jua'] text-[40px] text-center text-nowrap ${
              selectedItem === "hula" || !selectedItem
                ? "text-[#ED684D]"
                : "text-[#B12C0B] hover:text-[#eb9280]"
            }`}
            href="/?item=hula"
          >
            About Hula
          </Link>
          <div className="bg-[rgba(94,123,88,0.8)] h-[10px] w-[60%] my-[-18px]" />
          <Link
            id="game"
            className={`menu-item px-2 font-['Jua'] text-[40px] text-center text-nowrap ${
              selectedItem === "game"
                ? "text-[#ED684D]"
                : "text-[#B12C0B] hover:text-[#eb9280]"
            }`}
            href="/?item=game"
          >
            About Game
          </Link>
          <div className="bg-[rgba(94,123,88,0.8)] h-[10px] w-[60%] my-[-18px]" />
          <Link
            id="cast"
            className={`menu-item px-2 font-['Jua'] text-[40px] text-center  text-nowrap ${
              selectedItem === "cast"
                ? "text-[#ED684D]"
                : "text-[#B12C0B] hover:text-[#eb9280]"
            }`}
            href="/?item=cast"
          >
            Characters{" "}
          </Link>
          <div className="bg-[rgba(94,123,88,0.8)] h-[10px] w-[60%] my-[-18px]" />
          <Link
            id="studio"
            className={`menu-item px-2 font-['Jua'] text-[40px] text-center text-nowrap ${
              selectedItem === "studio" ? "text-[#ED684D]" : "text-[#B12C0B]"
            }`}
            href="/?item=studio"
          >
            Your Studios
          </Link>
          <div className="bg-[rgba(94,123,88,0.8)] h-[10px] w-[60%] my-[-18px]" />
          <div className="flex gap-2 items-start w-full justify-center px-2">
            <Link href="https://instagram.com">
              <InstagramLogo size="60px" color="#ED684D" />
            </Link>

            <Link href="https://discord.gg/hula">
              <DiscordLogo size="60px" color="#ED684D" />
            </Link>
            <Link href="https://twitter.com">
              <Image
                src="/kickstarter_logo.webp"
                height={60}
                width={60}
                quality={100}
                alt="kickstarter logo"
              />
            </Link>
          </div>
        </div>
      </div>
      {desktopMenuOpen ? (
        <>
          <div
            onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
            className="cursor-pointer"
          >
            <button className="absolute left-0 top-0 z-1 m-0 p-0 border-none text-[0px] bg-transparent cursor-pointer">
              Close Menu
            </button>
            <span className="absolute cursor-pointer motion-preset-shake origin-[234px_110px]">
              <span className="bm-cross absolute w-[20px] h-[90px] !bg-[#ED684D] rounded-full rotate-45 translate-x-[234px] translate-y-[110px]" />
              <span className="bm-cross absolute w-[20px] h-[90px] !bg-[#ED684D] rounded-full rotate-[-45deg] translate-x-[234px] translate-y-[110px]" />
            </span>
          </div>
        </>
      ) : (
        <div
          className="bm-burger-button desktop z-[1000] cursor-pointer"
          onClick={() => {
            setDesktopMenuOpen(!desktopMenuOpen);
          }}
        >
          <div className="motion-preset-shake">
            <button className="absolute left-0 top-0 z-1 w-full h-full m-0 p-0 border-none text-[0px] bg-transparent cursor-pointer">
              Open Menu
            </button>
            <span>
              <span className="bm-burger-bars absolute left-0 right-0 cursor-pointer" />
              <span className="bm-burger-bars absolute left-0 right-0 cursor-pointer" />
              <span className="bm-burger-bars absolute left-0 right-0 cursor-pointer" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
