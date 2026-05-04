import { cn } from "@/lib/utils";

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "bg-brand-white dark:bg-[#111111] border border-brand-gray-light/20 p-6 md:p-8 transition-all duration-300 hover:border-brand-gold group",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
