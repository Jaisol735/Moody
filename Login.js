import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send a request to your server to authenticate the user
    console.log("Login attempt with:", email, password)
    localStorage.setItem("isLoggedIn", "true")
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-6 flex flex-col justify-center sm:py-12 font-sans">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white/10 shadow-xl backdrop-blur-md sm:rounded-3xl sm:p-20 border border-white/20">
          <h2 className="text-center font-heading font-extrabold text-4xl mb-2 text-white">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded-md"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full transform transition duration-200 hover:scale-105"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-white">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-300 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

