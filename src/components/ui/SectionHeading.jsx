import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({
  label,
  title,
  description,
  centered = false,
  className,
}) {
  return (
    <ScrollReveal className={cn("mb-12 md:mb-20 max-w-3xl", centered && "mx-auto text-center", className)}>
      {label && (
        <div className={cn("flex items-center gap-4 mb-6", centered && "justify-center")}>
          {!centered && <div className="h-px w-12 bg-brand-gold" />}
          <span className="text-brand-gold uppercase tracking-widest text-sm font-medium">
            {label}
          </span>
          {centered && <div className="h-px w-12 bg-brand-gold" />}
        </div>
      )}
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-black dark:text-brand-white leading-tight mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-brand-gray dark:text-brand-gray-light text-lg md:text-xl">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
