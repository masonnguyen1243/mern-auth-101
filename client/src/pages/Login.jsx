import { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-purple-400 px-6 sm:px-0">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt=""
        className="absolute left-5 top-5 w-28 cursor-pointer sm:left-20 sm:w-32"
      />
      <div className="w-full rounded-lg bg-slate-900 p-10 text-sm text-indigo-300 shadow-lg sm:w-96">
        <h2 className="mb-3 text-center text-3xl font-semibold text-white">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>
        <p className="mb-6 text-center text-sm">
          {state === "Sign Up"
            ? "Create your account"
            : "Login to your account"}
        </p>

        <form>
          {state === "Sign Up" && (
            <div className="mb-4 flex w-full items-center gap-3 rounded-full bg-[#333A5C] px-5 py-2.5">
              <img src={assets.person_icon} alt="" />
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent outline-none"
              />
            </div>
          )}
          <div className="mb-4 flex w-full items-center gap-3 rounded-full bg-[#333A5C] px-5 py-2.5">
            <img src={assets.mail_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none"
            />
          </div>
          <div className="mb-4 flex w-full items-center gap-3 rounded-full bg-[#333A5C] px-5 py-2.5">
            <img src={assets.lock_icon} alt="" />
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none"
            />
          </div>

          <p
            onClick={() => navigate("/reset-password")}
            className="mb-4 cursor-pointer text-indigo-500"
          >
            Forgot password?
          </p>

          <button className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 py-2.5 font-medium text-white">
            {state === "Sign Up" ? "Sign Up" : "Log In"}
          </button>
        </form>

        {state === "Sign Up" ? (
          <p className="mt-4 text-center text-xs text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="cursor-pointer text-blue-400 underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="mt-4 text-center text-xs text-gray-400">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="cursor-pointer text-blue-400 underline"
            >
              Sign up
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
export default Login;
