import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#1f2a44] text-white hover:bg-[#233152] focus-visible:ring-[#2e4570]",
  secondary:
    "bg-transparent text-[#1f2a44] border border-[#c7cfdf] hover:bg-[#eef1f7] focus-visible:ring-[#9caaca]",
  ghost: "bg-transparent text-[#1f2a44] hover:bg-[#f2f4f8] focus-visible:ring-[#c7cfdf]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-full font-medium tracking-tight transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}
