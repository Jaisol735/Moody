import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"

export default function Fitness() {
  const navigate = useNavigate()
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      navigate("/")
    }
    // Simulated workout data
    setWorkouts([
      { id: 1, name: "Morning Yoga", duration: "30 mins", calories: 150 },
      { id: 2, name: "Evening Run", duration: "45 mins", calories: 300 },
      { id: 3, name: "Strength Training", duration: "60 mins", calories: 400 },
    ])
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-white to-orange-500 flex flex-col font-sans">
      <Navigation />
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full max-w-4xl bg-white/10 shadow-xl backdrop-blur-md rounded-3xl border border-white/20 p-6">
          <h2 className="text-center font-heading font-extrabold text-4xl mb-6 text-black">Fitness Tracker</h2>
          <div className="space-y-4">
            {workouts.map((workout) => (
              <div key={workout.id} className="bg-white/20 p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold">{workout.name}</h3>
                <p className="text-gray-700">Duration: {workout.duration}</p>
                <p className="text-gray-700">Calories Burned: {workout.calories}</p>
              </div>
            ))}
          </div>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add New Workout
          </button>
        </div>
      </div>
    </div>
  )
}

