import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  variant?: "default" | "monochrome" | "white";
}

export const ZenNoteLogoIcon = ({ className, variant = "default", ...props }: LogoProps) => {
  const colors = {
    default: {
      primary: "#10b981", // emerald-500
      secondary: "#0f172a", // slate-900
    },
    monochrome: {
      primary: "currentColor",
      secondary: "currentColor",
    },
    white: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.9)",
    },
  };

  const activeColors = colors[variant];

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M25 65 C 25 65, 35 75, 50 75 C 65 75, 70 60, 70 60"
        stroke={activeColors.secondary}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
      
      <path
        d="M45 55 C 45 55, 50 35, 75 25 C 75 25, 80 45, 65 55 C 55 60, 45 55, 45 55 Z"
        fill={activeColors.primary}
        stroke={activeColors.primary}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      />
      
      <circle cx="25" cy="65" r="5" fill={activeColors.secondary} />
      <circle cx="75" cy="25" r="4" fill={activeColors.primary} />
      
    </svg>
  );
};

export const ZenNoteLogoText = ({ className, variant = "default" }: LogoProps) => {
    const textColor = variant === "white" ? "text-white" : "text-slate-900";
    const accentColor = variant === "white" ? "text-emerald-300" : "text-emerald-600";
    
    return (
        <div className={`font-sans tracking-tight flex items-center gap-1 ${className}`}>
            <span className={`font-bold text-2xl ${textColor}`}>ZenNote</span>
            <span className={`text-2xl font-light ${accentColor}`}>Optimize</span>
        </div>
    );
};

export const ZenNoteFullLogo = ({ className, variant = "default", ...props }: LogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <ZenNoteLogoIcon className="w-8 h-8" variant={variant} {...props} />
      <ZenNoteLogoText variant={variant} />
    </div>
  );
};
