import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
  title: string;
  disable?: boolean;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  submitting?: boolean | false;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
};

const Button = ({
  title,
  disable,
  leftIcon,
  rightIcon,
  handleClick,
  submitting,
  type,
  bgColor,
  textColor,
}: Props) => (
  <button
    type={type || "button"}
    disabled={submitting || false}
    className={`flexCenter gap-3 px-4 py-1.5 
        ${disable ? "cursor-not-allowed" : ""}
        ${textColor ? textColor : "text-white"}
        ${
          submitting
            ? "bg-black/50"
            : bgColor
            ? bgColor
            : "bg-primary-blue hover:bg-primary-blue-variant"
        }
        border rounded-full text-sm font-medium max-md:w-full`}
    onClick={handleClick}
  >
    {leftIcon && (
      <Image src={leftIcon} width={20} height={20} alt="left icon" />
    )}
    {title}
    {rightIcon && (
      <Image src={rightIcon} width={20} height={20} alt="right icon" />
    )}
  </button>
);

export default Button;
