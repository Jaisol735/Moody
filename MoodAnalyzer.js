import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"

export default function MoodAnalyzer() {
  const navigate = useNavigate()
  const [mood, setMood] = useState("")

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      navigate("/")
    }
  }, [navigate])

  const handleMoodSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the mood data to your server
    console.log("Mood submitted:", mood)
    // Reset the form
    setMood("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-white to-orange-500 flex flex-col font-sans">
      <Navigation />
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full max-w-4xl bg-white/10 shadow-xl backdrop-blur-md rounded-3xl border border-white/20 p-6">
          <h2 className="text-center font-heading font-extrabold text-4xl mb-6 text-black">Mood Analyzer</h2>
          <form onSubmit={handleMoodSubmit} className="space-y-4">
            <div>
              <label htmlFor="mood" className="block text-sm font-medium text-gray-700">
                How are you feeling today?
              </label>
              <input
                type="text"
                id="mood"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter your mood"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

