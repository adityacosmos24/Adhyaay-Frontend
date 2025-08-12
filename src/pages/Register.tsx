import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { api } from "../lib/axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const onSubmit = async (data: RegisterFormValues) => {
    setServerError(null);
    try {
      setLoading(true);
      const res = await api.post("/auth/signup", data);

      // Assuming backend returns a token on signup
      if (res.status === 201) {
        localStorage.setItem("token", res.data.token);
        toast.success("Registration successful!");
        navigate("/");
      }
    } catch (error: any) {
      setServerError(error.response?.data?.message || "Registration failed");
        toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Name</label>
          <Input
            placeholder="Your Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <Input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <Input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        {/* Server Error */}
        {serverError && <p className="text-red-500 mb-3">{serverError}</p>}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </Button>

        <p className="text-sm mt-3 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
