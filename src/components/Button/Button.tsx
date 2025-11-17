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
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 cursor-pointer";

const variantClasses: Record<ButtonVariant, string> = {
  solid: `bg-[var(--cta-full-bg)] text-white hover:bg-[var(--cta-full-bg-hover)] disabled:bg-gray-400 ${borderMedium}`,
  outline: `${borderMedium} text-[var(--cta-text)] bg-transparent`
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
