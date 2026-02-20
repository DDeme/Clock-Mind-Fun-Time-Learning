import React from "react";

type ButtonVariant = "primary" | "dark" | "success" | "warning" | "error";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
};

const variantStyles: Record<
  ButtonVariant,
  { enabled: string; disabled: string }
> = {
  primary: {
    enabled:
      "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/30 active:translate-y-1 active:shadow-none shadow-lg",
    disabled: "bg-slate-200 text-slate-400 cursor-not-allowed",
  },
  dark: {
    enabled: "bg-slate-900 text-white shadow-xl active:scale-95",
    disabled: "bg-slate-200 text-slate-400 cursor-not-allowed",
  },
  success: {
    enabled:
      "bg-green-500 hover:bg-green-600 text-white shadow-green-500/30 active:translate-y-1 active:shadow-none shadow-lg",
    disabled: "bg-slate-200 text-slate-400 cursor-not-allowed",
  },
  warning: {
    enabled:
      "bg-yellow-500 hover:bg-yellow-600 text-white shadow-yellow-500/30 active:translate-y-1 active:shadow-none shadow-lg",
    disabled: "bg-slate-200 text-slate-400 cursor-not-allowed",
  },
  error: {
    enabled:
      "bg-red-500 hover:bg-red-600 text-white shadow-red-500/30 active:translate-y-1 active:shadow-none shadow-lg",
    disabled: "bg-slate-200 text-slate-400 cursor-not-allowed",
  },
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = "primary",
}) => {
  const styles = variantStyles[variant];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full font-extrabold py-5 rounded-2xl text-xl transition-all flex items-center justify-center gap-3
        ${disabled ? styles.disabled : styles.enabled}
      `}
    >
      {children}
    </button>
  );
};
