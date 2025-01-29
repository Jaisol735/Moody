import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-6 flex flex-col justify-center sm:py-12 font-sans">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white/10 shadow-xl backdrop-blur-md sm:rounded-3xl sm:p-20 border border-white/20">
          <h1 className="text-center font-heading font-extrabold text-5xl mb-2 text-white">Welcome to MOODy</h1>
          <p className="text-center text-white mb-8">
            Your personal mood tracker and wellness companion. Start your journey to better mental health today.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/login"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full transform transition duration-200 hover:scale-105"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full transform transition duration-200 hover:scale-105"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

