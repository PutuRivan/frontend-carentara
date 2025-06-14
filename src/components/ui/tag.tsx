// components/ui/tag.tsx
import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Tag({ className, variant = "default", ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors",
        variant === "default"
          ? "bg-primary text-primary-foreground"
          : "border border-black text-black",
        className
      )}
      {...props}
    />
  );
}
