import Link from "next/link";
import "../BurgerMenu/burgerMenu.css";
import { InstagramLogo, TwitterLogo, DiscordLogo } from "@phosphor-icons/react";

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
    <>
      {desktopMenuOpen ? (
        <div>
          <div
            className="bm-burger-button desktop z-[1000]"
            onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
          >
            <div className="motion-preset-shake">
              <button className="absolute left-0 top-0 z-1 w-full h-full m-0 p-0 border-none text-[0px] bg-transparent cursor-pointer">
                Close Menu
              </button>
              <span className="absolute cursor-pointer">
                <span className="bm-cross absolute w-[5px] h-[40px] rotate-45 translate-x-[24px] translate-y-[8px]" />
                <span className="bm-cross absolute w-[5px] h-[40px] rotate-[-45deg] translate-x-[24px] translate-y-[8px]" />
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="bm-burger-button desktop z-[1000]"
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
      <div
        className={`w-32 h-fit p-4 bg-[#373a47] fixed left-[100px] top-[158px] rounded-md ${
          desktopMenuOpen
            ? "opacity-100 scale-y-100 scale-x-100"
            : "opacity-0 scale-y-0 scale-x-0 translate-y-[-30px] translate-x-[10px]"
        } transition-all duration-300 transform origin-top-left`}
      >
        <div className="flex flex-col gap-6">
          <Link
            id="hula"
            className={`menu-item px-2 ${
              selectedItem === "hula" || !selectedItem
                ? "text-[#ED684D]"
                : "text-[#b8b7ad]"
            }`}
            href="/?item=hula"
          >
            Hula
          </Link>
          <Link
            id="game"
            className={`menu-item px-2 ${
              selectedItem === "game" ? "text-[#ED684D]" : "text-[#b8b7ad]"
            }`}
            href="/?item=game"
          >
            Game
          </Link>
          <Link
            id="cast"
            className={`menu-item px-2 ${
              selectedItem === "cast" ? "text-[#ED684D]" : "text-[#b8b7ad]"
            }`}
            href="/?item=cast"
          >
            Cast
          </Link>
          <Link
            id="studio"
            className={`menu-item px-2 ${
              selectedItem === "studio" ? "text-[#ED684D]" : "text-[#b8b7ad]"
            }`}
            href="/?item=studio"
          >
            Studio
          </Link>
          <div className="flex gap-2 items-start w-full justify-start px-2">
            <Link href="https://instagram.com">
              <InstagramLogo size="24px" color="#ED684D" />
            </Link>
            <Link href="https://twitter.com">
              <TwitterLogo size="24px" color="#ED684D" />
            </Link>
            <Link href="https://discord.gg/hula">
              <DiscordLogo size="24px" color="#ED684D" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
