import Image from "next/image";
import "./burgerMenu.css";
import Link from "next/link";
import { push as Menu } from "react-burger-menu";
import { DiscordLogo, InstagramLogo } from "@phosphor-icons/react";

export default function BurgerMenu({
  menuOpen,
  setMenuOpen,
  selectedItem,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: string | null;
}) {
  return (
    <Menu
      pageWrapId="page-wrap"
      outerContainerId="outer-container"
      isOpen={menuOpen}
      onStateChange={(state) => setMenuOpen(state.isOpen)}
      width={114}
      id="burger-menu"
      noOverlay
      styles={{
        bmMenuWrap: {
          transitionDuration: "0.3s",
        },
        bmBurgerButton: {
          scale: menuOpen ? "0" : "0.8",
          transform: menuOpen ? "translateY(-100%)" : "translateY(0)",
          transitionDuration: "0.3s",
        },
        bmCross: {
          background: "#ED684D",
          height: "35px",
          width: "8px",
          borderRadius: "40%",
        },
        bmCrossButton: {
          right: "16px",
          top: "4px",
        },
        bmItemList: {
          paddingRight: "8px",
          paddingLeft: "8px",
        },
        bmMenu: {
          boxShadow: "0px 0px 16px 1px #000000",
          backgroundImage: "url(/mobileSideMenu.webp)",
          backgroundSize: "115px 100%",
        },
      }}
      className="transition-all"
    >
      <div className="relative !flex flex-col gap-4 h-full !items-start !justify-start max-w-[115px] ml-[-5px]">
        <Link
          id="hula"
          className={`menu-item font-['Jua'] text-[20px] ${
            selectedItem === "hula" || !selectedItem
              ? "text-[#ED684D]"
              : "text-[#B12C0B] hover:text-[#eb9280]"
          }`}
          href="/?item=hula"
        >
          About Hula
        </Link>
        <div className="bg-[rgba(94,123,88,0.8)] h-[5px] w-[100%]" />
        <Link
          id="game"
          className={`menu-item font-['Jua'] text-[20px] ${
            selectedItem === "game"
              ? "text-[#ED684D]"
              : "text-[#B12C0B] hover:text-[#eb9280]"
          }`}
          href="/?item=game"
        >
          About Game
        </Link>
        <div className="bg-[rgba(94,123,88,0.8)] h-[5px] w-[100%]" />
        <Link
          id="cast"
          className={`menu-item font-['Jua'] text-[20px] ${
            selectedItem === "cast"
              ? "text-[#ED684D]"
              : "text-[#B12C0B] hover:text-[#eb9280]"
          }`}
          href="/?item=cast"
        >
          Meet the cast
        </Link>
        <div className="bg-[rgba(94,123,88,0.8)] h-[5px] w-[100%]" />
        <Link
          id="studio"
          className={`menu-item font-['Jua'] text-[20px] ${
            selectedItem === "studio" ? "text-[#ED684D]" : "text-[#B12C0B]"
          }`}
          href="/?item=studio"
        >
          Your Studios
        </Link>
        <div className="bg-[rgba(94,123,88,0.8)] h-[5px] w-[100%]" />
        <div className="flex flex-col gap-2 items-center w-full justify-center px-2 mb-[-20px] bottom-0 absolute">
          <Link href="https://instagram.com" target="_blank">
            <InstagramLogo size="60px" color="#ED684D" />
          </Link>

          <Link href="https://discord.gg/hula" target="_blank">
            <DiscordLogo size="60px" color="#ED684D" />
          </Link>
          <Link
            href="https://kickstarter.com"
            target="_blank"
            className="w-[60px] h-[60px]"
          >
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
    </Menu>
  );
}
