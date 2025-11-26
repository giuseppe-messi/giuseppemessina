import type { ButtonHTMLAttributes } from "react";
import { borderMedium } from "../../shared/styles";

type ButtonVariant = "solid" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  full?: boolean;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer";

const variantClasses: Record<ButtonVariant, string> = {
  solid: `
    bg-indigo-600
    text-white
    hover:bg-indigo-500
    focus-visible:outline-indigo-600
    disabled:bg-indigo-300
  `,
  outline: `
    ${borderMedium}
    text-[var(--cta-text)]
    bg-transparent
  `
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base"
};

export const Button = ({
  variant = "solid",
  size = "md",
  full,
  className = "",
  ...props
}: ButtonProps) => {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    full ? "w-full" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return <button className={classes} {...props} />;
};
