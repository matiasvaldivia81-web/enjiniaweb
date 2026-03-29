import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  children: React.ReactNode;
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit";
};

const styles: Record<Variant, string> = {
  primary:
    "bg-white text-black hover:bg-zinc-100 border border-white",
  secondary:
    "bg-transparent text-white border border-white hover:bg-white hover:text-black",
  ghost:
    "bg-transparent text-white hover:text-zinc-300",
};

const darkStyles: Record<Variant, string> = {
  primary:
    "bg-black text-white hover:bg-zinc-900 border border-black",
  secondary:
    "bg-transparent text-black border border-black hover:bg-black hover:text-white",
  ghost:
    "bg-transparent text-black hover:text-zinc-500",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  arrow = false,
  className = "",
  type = "button",
}: Props) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer";

  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
        {arrow && <ArrowRight className="w-4 h-4" strokeWidth={1.5} />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
      {arrow && <ArrowRight className="w-4 h-4" strokeWidth={1.5} />}
    </button>
  );
}

export function DarkButton({
  href,
  onClick,
  variant = "primary",
  children,
  arrow = false,
  className = "",
  type = "button",
}: Props) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer";

  const cls = `${base} ${darkStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
        {arrow && <ArrowRight className="w-4 h-4" strokeWidth={1.5} />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
      {arrow && <ArrowRight className="w-4 h-4" strokeWidth={1.5} />}
    </button>
  );
}
