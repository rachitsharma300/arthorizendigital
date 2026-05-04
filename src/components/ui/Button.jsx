import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 relative overflow-hidden group tracking-wide";
  const sizeStyles = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };
  const variantStyles = {
    primary:
      "bg-brand-gold text-brand-black hover:bg-brand-gold-light",
    secondary:
      "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black dark:text-brand-gold",
    ghost:
      "text-brand-black dark:text-brand-white hover:text-brand-gold dark:hover:text-brand-gold",
  };

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={classes}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
