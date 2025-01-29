import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"

export default function Reward() {
  const navigate = useNavigate()
  const [rewards, setRewards] = useState([])

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      navigate("/")
    }
    // Simulated rewards data
    setRewards([
      { id: 1, name: "Free Meditation Session", points: 100 },
      { id: 2, name: "Wellness E-book", points: 200 },
      { id: 3, name: "Premium App Access (1 month)", points: 500 },
    ])
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-white to-orange-500 flex flex-col font-sans">
      <Navigation />
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full max-w-4xl bg-white/10 shadow-xl backdrop-blur-md rounded-3xl border border-white/20 p-6">
          <h2 className="text-center font-heading font-extrabold text-4xl mb-6 text-black">Rewards</h2>
          <div className="space-y-4">
            {rewards.map((reward) => (
              <div key={reward.id} className="bg-white/20 p-4 rounded-lg shadow flex justify-between items-center">
                <h3 className="text-xl font-bold">{reward.name}</h3>
                <p className="text-gray-700">{reward.points} points</p>
              </div>
            ))}
          </div>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Redeem Points
          </button>
        </div>
      </div>
    </div>
  )
}

