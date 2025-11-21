import { useState } from "react";
import Header from "../comps/Header";
import { users } from "../api/api";

const SignupPage = () =>{
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!username || !password) {
        setMessage("Please enter both username and password.");
        return;
        }

        setMessage("Creating account...");

        try {
        const result = await users.addUser(username, password);
        console.log("Signup Result:", result);

        if (result?.User === "Registered") {
          setMessage("Account created successfully! Redirecting to login...");
          setTimeout(() => (window.location.href = "/login"), 1500);
        } else {
            setMessage(result?.message || "Signup failed. Try a different username/email.");
        }
        } catch (err) {
        console.error("Error creating account:", err);
        setMessage("Error connecting to server.");
        }
    };

    return (
    <div className="min-h-screen bg-pastel-purple-300 flex flex-col py-20 justify-center items-center">
      <Header />
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-extrabold mb-5">Sign Up</h1>
        <a href="/login" className="text-center text-blue-600 font-semibold">
          or login to an existing account
        </a>
      </div>

      <form
        onSubmit={handleSignup}
        className="mx-auto max-w-xl rounded-xl shadow-xl p-10 mt-5 mb-15 bg-pastel-purple-100"
      >
        <div className="mx-auto text-center">
          <label htmlFor="username" className="block font-semibold text-start">
            Username or Email
          </label>
          <input
            id="username"
            type="text"
            className="w-full p-2 rounded-md bg-gray-200 focus:bg-gray-50 mb-5"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password" className="block font-semibold text-start">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-2 rounded-md bg-gray-200 focus:bg-gray-50 mb-5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {message && (
            <p className="text-center text-sm font-semibold text-red-600 mb-4">
              {message}
            </p>
          )}

          <input
            type="submit"
            value="Create Account"
            className="w-full mt-5 rounded-sm p-2 hover:bg-blue-400 bg-purple-300 cursor-pointer"
          />
        </div>
      </form>

      <a href="/" className="text-center text-blue-600 font-semibold">
        Return to home screen
      </a>
    </div>
  );
};

export default SignupPage;