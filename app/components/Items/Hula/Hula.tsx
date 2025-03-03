import { useEffect, useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";

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
    <div className="flex flex-col items-center motion-preset-pop">
      <span className="text-orange-400 font-['Jua'] text-xl">
        Talk with Hula!
      </span>
      <div
        className="bg-[rgba(55,58,71,0.6)] h-8 w-64 rounded-md flex flex-row justify-between pl-2 pr-1 !opacity-100"
        id="email-input"
      >
        <input
          placeholder="Enter your email address"
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
      <span className="text-orange-400 font-['Jua'] text-center max-w-[300px]">
        We&apos;ll also send you updates as we continue to work on the game.
      </span>
      {error ? <span className="text-red-400 text-center">{error}</span> : null}
      {success ? (
        <span className="text-green-400 text-center">
          Thanks for signing up!
        </span>
      ) : null}
    </div>
  );
}
