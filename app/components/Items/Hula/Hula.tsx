import { useEffect, useState } from "react";
import { HandPointing, PaperPlaneTilt } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
export default function Hula() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setSuccess(false);
    setError("");
  };

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
    <div className=" motion-preset-pop">
      <div className="relative">
        <Image src="/hula_logo.webp" height={466} width={466} alt="Hula logo" />
        <Link
          href="https://kickstarter.com"
          target="_blank"
          className="absolute bg-transparent aspect-square w-[24%] max-w-[120px] top-[24%] right-[8.5%] z-10 cursor-pointer"
        >
          {" "}
          <HandPointing
            color="#ED684D"
            weight="duotone"
            size="32px"
            className="absolute top-[50%] right-[-5%] origin-bottom-right -rotate-45 duocolor-fill motion-preset-wobble motion-translate-y-in-50 motion-translate-y-out-50 motion-translate-y-loop motion-duration-1000"
          />
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-orange-400 font-['Jua'] text-xl">
          Talk with Hula!
        </span>
        <div
          className="bg-[rgba(255,255,255,0.6)] border-[2px] border-[rgba(255,255,255,0.4)] shadow-[0px_0px_6px_6px_rgba(255,255,255,0.4)] h-12 w-72 rounded-md flex flex-row justify-between items-center pl-2 pr-1 !opacity-100"
          id="email-input"
        >
          <input
            placeholder="Enter your email address"
            className={`bg-transparent text-[20px] placeholder-slate-600 ${
              error ? "text-red-400" : "text-black"
            } border-none outline-none w-full max-w-[100%]`}
            type="email"
            value={email}
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <div
            onClick={submitEmail}
            className="p-1 cursor-pointer flex justify-end h-full items-center"
          >
            <div className="h-full w-[1px] bg-[#db8776] mr-1" />
            <PaperPlaneTilt color="#ED684D" weight="fill" size="24px" />
          </div>
        </div>
        <span className="text-orange-400 font-['Jua'] text-center max-w-[300px]">
          We&apos;ll also send you updates as we continue to work on the game.
        </span>
        {error ? (
          <span className="text-red-400 text-center">{error}</span>
        ) : null}
        {success ? (
          <span className="text-green-400 text-center">
            Thanks for signing up!
          </span>
        ) : null}
      </div>
    </div>
  );
}
