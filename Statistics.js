import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"

export default function Statistics() {
  const navigate = useNavigate()
  const [stats, setStats] = useState({})

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      navigate("/")
    }
    // Simulated statistics data
    setStats({
      moodAverage: 7.5,
      daysTracked: 30,
      topMood: "Happy",
      improvementRate: "15%",
    })
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-white to-orange-500 flex flex-col font-sans">
      <Navigation />
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full max-w-4xl bg-white/10 shadow-xl backdrop-blur-md rounded-3xl border border-white/20 p-6">
          <h2 className="text-center font-heading font-extrabold text-4xl mb-6 text-black">Your Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/20 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold">Average Mood</h3>
              <p className="text-3xl font-bold">{stats.moodAverage}/10</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold">Days Tracked</h3>
              <p className="text-3xl font-bold">{stats.daysTracked}</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold">Top Mood</h3>
              <p className="text-3xl font-bold">{stats.topMood}</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold">Improvement Rate</h3>
              <p className="text-3xl font-bold">{stats.improvementRate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

