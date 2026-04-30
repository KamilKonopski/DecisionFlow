import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import { loginSchema, type LoginFormData } from "@/features/authentication/schema/loginSchema";
import { useLogin } from "@/features/authentication/service/useLogin";

import FormLabel from "@/shared/ui/Form/FormLabel/FormLabel";
import Button from "@/shared/ui/Button/Button";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();

  const handleLogin = (email: string, password: string) => {
    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          localStorage.setItem("token", data.token);
          navigate("/home", { replace: true });
        },
        onError: (error: Error) => {
          setError("root", {
            type: "server",
            message: error.message,
          });
        },
      },
    );
  };

  return (
    <section className="w-full min-h-dvh flex flex-col items-center justify-center px-4">
      <div className="w-40 sm:w-52 md:w-60">
        <img className="w-full h-full" src="/logotext.png" alt="DesisionFlow Logo" />
      </div>
      <div className="flex flex-col items-center gap-2 my-5 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">Welcome back</h2>
        <p className="text-sm font-medium sm:text-base">Sign in to continue to your workspace</p>
      </div>
      <div className="bg-surface rounded-card py-5 px-5 sm:px-7 w-full max-w-md">
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit((data) => {
            handleLogin(data.email, data.password);
          })}
        >
          <div className="flex flex-col gap-1">
            <FormLabel id="login-email" labelText="Email" className="font-medium" />
            <input
              id="login-email"
              type="email"
              placeholder="your-email@company.com"
              {...register("email")}
              className="w-full px-4 py-2.5 text-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
            {errors.email && <p className="text-danger text-xs">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <FormLabel id="login-password" labelText="Password" className="font-medium" />
            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                {...register("password")}
                className="w-full px-4 py-2.5 pr-12 text-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-danger text-xs">{errors.password.message}</p>}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 my-2">
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="login-checkbox" />
              <FormLabel id="login-checkbox" labelText="Remember me" />
            </div>
            <span className="text-sm text-right sm:text-left">Forgot password?</span>
          </div>
          {errors.root && <p className="text-danger text-sm text-center">{errors.root.message}</p>}
          <Button type="submit" variant="primary" isLoading={isPending} disabled={!isValid}>
            Sign in
          </Button>
        </form>
        <div className="my-8">
          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-px bg-border" />
            <p className="text-sm whitespace-nowrap">or continue as</p>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="flex flex-col gap-2">
            <Button
              variant="secondary"
              onClick={() => handleLogin("alex-kovac@company.com", "Alexkovac123$")}
              leftIcon={<FaUserCircle size={20} />}
            >
              Continue as Alex Kovac
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleLogin("barbara-stranger@company.com", "Barbarastranger123$")}
              leftIcon={<FaUserCircle size={20} />}
            >
              Continue as Barbara Stranger
            </Button>
          </div>
        </div>
        <p className="mt-8 text-center text-sm sm:text-base">
          Don`t have a account? <span className="text-primary">Contact Sales</span>
        </p>
      </div>
    </section>
  );
};

export default Login;
