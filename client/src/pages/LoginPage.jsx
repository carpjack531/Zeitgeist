//TO-DO: Implement actual backend authentication
import { useState, useContext } from "react";
import Header from "../comps/Header";
import { users } from "../api/api";
import {AuthContext} from "../api/AuthContext.jsx"

const LoginPage = (props) =>{
    const {updateIsLoggedIn} = useContext(AuthContext);


    //From inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Login feedback
    const [message, setMessage] = useState("");

    
    const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {
        //Call your backend login function
        const result = await users.login(email, password);
        console.log("Login Result:", result);

        if (result && !result.error) {
            //Store session in localStorage
            localStorage.setItem("username", email);

            setMessage("Login successful!");
            updateIsLoggedIn(true);
            
        } else {
            setMessage("Invalid credentials");
        }
        } catch (err) {
        console.error("Login Error:", err);
        setMessage("An error occurred during login.");
        }
    };

    return (
        <div className="min-h-screen bg-pastel-purple-300 flex flex-col py-20 justify-center items-center">
        <Header />
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h1 className="text-center text-3xl font-extrabold mb-5">Sign In</h1>
            <a href="/signup" className="text-center text-blue-600 font-semibold">
            or create an account
            </a>
        </div>

        <form
            onSubmit={handleLogin}
            className="mx-auto max-w-xl rounded-xl shadow-xl p-10 mt-5 mb-15 bg-pastel-purple-100"
        >
            <div className="mx-auto text-center">
            <label htmlFor="email" className="block font-semibold text-start">
                Username or Email
            </label>
            <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded-md bg-gray-200 focus:bg-gray-50 mb-5"
                required
            />

            <label htmlFor="password" className="block font-semibold text-start">
                Password
            </label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded-md bg-gray-200 focus:bg-gray-50 mb-5"
                required
            />

            <a href="/" className="text-center text-blue-600 font-semibold">
                Forgot Password?
            </a>

            <input
                type="submit"
                value="Log In"
                className="w-full mt-5 rounded-sm p-2 hover:bg-blue-400 bg-purple-300 cursor-pointer"
            />

            {message && <p className="mt-4 font-medium">{message}</p>}
            </div>
        </form>

        <a href="/" className="text-center text-blue-600 font-semibold mt-5">
            Return to home screen
        </a>
        </div>
    );
};

export default LoginPage;