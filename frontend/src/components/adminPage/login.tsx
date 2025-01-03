import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import logo from "/LinkedIn_logo_.png";

interface LoginProps {
  setShowNavFooter: (value: boolean) => void;
}

export default function Login({ setShowNavFooter }: LoginProps) {
  const navigate = useNavigate();
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLoginEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoginEmail(event.target.value);
  };

  const handleLoginPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoginPassword(event.target.value);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!LoginEmail || !LoginPassword) {
      setLoginError("Email and password cannot be empty.");
      return;
    }

    setLoginError("");

    try {
    //   const response = await fetch("http://localhost:8080/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email: LoginEmail, password: LoginPassword }),
    //   });

    //   if (response.ok) {
        // const userData = await response.json();
        // localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage
        setShowNavFooter(false); // Show nav/footer after login
        navigate("/adminPanel");
    //   } else {
    //     setLoginError("Login failed. Please check your credentials.");
    //   }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginError("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    setShowNavFooter(false); // Hide nav/footer on the login page
  }, [setShowNavFooter]);

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex pb-16">
          {/* <img src={logo} className="h-8" alt="LinkedIn Logo" /> */}
          <span className="text-3xl font-bold whitespace-nowrap text-black">
            Raporto
          </span>
        </div>

        <div
          className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-700"
          style={{ backgroundColor: "#5C2018" }}
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Sign in
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleLoginEmailChange}
                  className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                  style={{ backgroundColor: "#F3EEEA" }}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={handleLoginPasswordChange}
                  className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  style={{ backgroundColor: "#F3EEEA" }}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border rounded bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <p className="text-red-500">{loginError}</p>
              <button className="group relative z-0 h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50" type="submit">
                <span className="relative z-10">Login</span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-red-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
