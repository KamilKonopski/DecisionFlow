import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  leftIcon?: ReactNode;
}

const Button = ({
  variant = "primary",
  isLoading = false,
  disabled,
  children,
  leftIcon,
  className,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "w-full py-2.5 rounded-md text-sm font-medium transition flex items-center justify-center";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-primary text-surface hover:bg-primary-hover disabled:opacity-50",
    secondary: "bg-transparent border border-border hover:bg-background disabled:opacity-50",
  };

  return (
    <button
      className={[baseClasses, variants[variant], className].filter(Boolean).join(" ")}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        "Signing in..."
      ) : (
        <>
          {leftIcon && <span className="w-6 flex justify-center">{leftIcon}</span>}
          <span className={leftIcon ? "ml-2" : ""}>{children}</span>
        </>
      )}
    </button>
  );
};

export default Button;
