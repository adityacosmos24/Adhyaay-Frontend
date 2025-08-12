import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "../components/ui/button"; // shadcn button
import { useNavigate } from "react-router-dom";
import { api } from "../lib/axios";
import toast from "react-hot-toast";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function Login({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [serverError, setServerError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    setServerError(null);
    try {
      const res = await api.post("/auth/login", data, { withCredentials: true });
      if (res.status === 200) {
        // Update global auth state
        setIsAuthenticated(true);
        toast.success("Login successful!");
        navigate("/"); // Redirect to home
      }
    } catch (error: any) {
      setServerError(error.response?.data?.message || "Login failed");
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Server Error */}
        {serverError && (
          <p className="text-red-500 text-sm mb-3">{serverError}</p>
        )}

        <Button type="submit" className="w-full">
          Login
        </Button>

        <p className="text-sm mt-3 text-center">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
