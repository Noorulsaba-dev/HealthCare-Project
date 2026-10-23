import { useState } from "react";

export default function Auth({ isOpen, onClose, onLoginSuccess }) {
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (isSignup && password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    setMessage(
      isSignup
        ? "Signup form submitted! Backend connection is still required."
        : "Login form submitted! Backend authentication is still required."
    );
    onLoginSuccess();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="auth"
        className="relative my-auto w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl sm:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close authentication form"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-600 hover:bg-slate-200"
        >
          ×
        </button>

        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl font-bold text-blue-700">
            H+
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            {isSignup ? "Create Your Account" : "Welcome Back!"}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {isSignup
              ? "Join HealthCare+ and get started."
              : "Login to your HealthCare+ account."}
          </p>
        </div>

        <div className="mb-6 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => {
              setIsSignup(false);
              setMessage("");
            }}
            className={`rounded-lg py-3 text-sm font-semibold transition ${
              !isSignup
                ? "bg-blue-700 text-white shadow"
                : "text-slate-600 hover:text-blue-700"
            }`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => {
              setIsSignup(true);
              setMessage("");
            }}
            className={`rounded-lg py-3 text-sm font-semibold transition ${
              isSignup
                ? "bg-blue-700 text-white shadow"
                : "text-slate-600 hover:text-blue-700"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form key={isSignup ? "signup" : "login"} onSubmit={handleSubmit}>
          {isSignup && (
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="authEmail"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email Address
            </label>
            <input
              id="authEmail"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="authPassword"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Password
            </label>
            <input
              id="authPassword"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete={isSignup ? "new-password" : "current-password"}
              minLength={8}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {isSignup && (
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                autoComplete="new-password"
                minLength={8}
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          )}

          {message && (
            <p
              role="status"
              className="mb-4 rounded-xl bg-blue-50 p-3 text-sm leading-5 text-blue-800"
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="mt-3 w-full rounded-xl bg-blue-700 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-800"
          >
            {isSignup ? "Create Account" : "Login to Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => {
              setIsSignup(!isSignup);
              setMessage("");
            }}
            className="font-semibold text-blue-700 hover:underline"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>

        <p className="mt-5 text-center text-xs text-slate-400">
          HealthCare+ · Your Health, Our Priority
        </p>
      </div>
    </div>
  );
}
