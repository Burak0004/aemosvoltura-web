import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden will-change-transform [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Premium Primary: Gradient with glow
        default: "bg-gradient-to-r from-[#69F0AE] to-[#00C853] text-white shadow-lg shadow-[#69F0AE]/30 hover:shadow-xl hover:shadow-[#69F0AE]/40 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 focus-visible:ring-[#69F0AE]",
        
        // Premium Secondary: Glass with border
        secondary: "bg-white/5 backdrop-blur-sm border border-[#69F0AE]/30 text-[#69F0AE] hover:bg-[#69F0AE]/10 hover:border-[#69F0AE]/60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#69F0AE]/20",
        
        // Premium Outline: Enhanced border
        outline: "border border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-gray-50 hover:border-[#69F0AE]/40 hover:-translate-y-0.5 hover:shadow-md text-gray-900",
        
        // Premium Ghost: Subtle interactions
        ghost: "hover:bg-[#69F0AE]/10 hover:text-[#00C853] hover:scale-105",
        
        // Premium CTA: Strong gradient
        cta: "bg-gradient-to-r from-[#00C853] to-[#4CAF50] text-white shadow-xl shadow-[#00C853]/40 hover:shadow-2xl hover:shadow-[#00C853]/50 hover:-translate-y-2 hover:scale-110",
        
        // Icon buttons: Scale effect
        icon: "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-[#69F0AE]/20 hover:scale-125 hover:rotate-3",
        
        // Destructive: Premium red
        destructive: "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-1",
        
        // Link: Enhanced underline
        link: "text-[#69F0AE] underline-offset-4 hover:underline hover:text-[#00C853] hover:scale-105",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-13 rounded-xl px-10 text-base",
        icon: "h-11 w-11 rounded-xl",
        cta: "h-14 px-12 py-4 text-lg rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
