import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send a request to your server to handle the password reset
    setMessage("If an account with that email exists, we have sent password reset instructions.")
    setTimeout(() => {
      navigate("/")
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-6 flex flex-col justify-center sm:py-12 font-sans">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white/10 shadow-xl backdrop-blur-md sm:rounded-3xl sm:p-20 border border-white/20">
          <h2 className="text-center font-heading font-extrabold text-4xl mb-2 text-white">Forgot Password</h2>
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
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full transform transition duration-200 hover:scale-105"
            >
              Reset Password
            </button>
          </form>
          {message && <p className="mt-4 text-center text-white">{message}</p>}
        </div>
      </div>
    </div>
  )
}

