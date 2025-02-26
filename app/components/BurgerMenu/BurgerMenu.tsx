import "./burgerMenu.css";
import Link from "next/link";
import { push as Menu } from "react-burger-menu";
import { useSearchParams } from "next/navigation";
export default function BurgerMenu({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const searchParams = useSearchParams();
  console.log(searchParams.get("item"));
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
          searchParams.get("item") === "hula" || !searchParams.get("item")
            ? "text-orange-200"
            : ""
        }`}
        href="/?item=hula"
      >
        Hula
      </Link>
      <Link
        id="game"
        className={`menu-item ${
          searchParams.get("item") === "game" ? "text-orange-200" : ""
        }`}
        href="/?item=game"
      >
        Game
      </Link>
      <Link
        id="cast"
        className={`menu-item ${
          searchParams.get("item") === "cast" ? "text-orange-200" : ""
        }`}
        href="/?item=cast"
      >
        Cast
      </Link>
      <Link
        id="studio"
        className={`menu-item ${
          searchParams.get("item") === "studio" ? "text-orange-200" : ""
        }`}
        href="/?item=studio"
      >
        Studio
      </Link>
    </Menu>
  );
}
