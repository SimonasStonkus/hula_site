import "./burgerMenu.css";
import Link from "next/link";
import { push as Menu } from "react-burger-menu";

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
      width={100}
      id="burger-menu"
      noOverlay
      styles={{
        bmMenuWrap: {
          transitionDuration: "0.5s",
        },
      }}
    >
      <Link
        id="hula"
        className={`menu-item ${
          selectedItem === "hula" || !selectedItem ? "text-[#ED684D]" : ""
        }`}
        href="/?item=hula"
      >
        Hula
      </Link>
      <Link
        id="game"
        className={`menu-item ${
          selectedItem === "game" ? "text-[#ED684D]" : ""
        }`}
        href="/?item=game"
      >
        Game
      </Link>
      <Link
        id="cast"
        className={`menu-item ${
          selectedItem === "cast" ? "text-[#ED684D]" : ""
        }`}
        href="/?item=cast"
      >
        Cast
      </Link>
      <Link
        id="studio"
        className={`menu-item ${
          selectedItem === "studio" ? "text-[#ED684D]" : ""
        }`}
        href="/?item=studio"
      >
        Studio
      </Link>
    </Menu>
  );
}
