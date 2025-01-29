import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"

export default function Events() {
  const navigate = useNavigate()
  const [events, setEvents] = useState([])

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      navigate("/")
    }
    // Simulated events data
    setEvents([
      { id: 1, title: "Yoga Session", date: "2023-07-15", time: "10:00 AM" },
      { id: 2, title: "Meditation Workshop", date: "2023-07-20", time: "2:00 PM" },
      { id: 3, title: "Group Therapy", date: "2023-07-25", time: "4:00 PM" },
    ])
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-white to-orange-500 flex flex-col font-sans">
      <Navigation />
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full max-w-4xl bg-white/10 shadow-xl backdrop-blur-md rounded-3xl border border-white/20 p-6">
          <h2 className="text-center font-heading font-extrabold text-4xl mb-6 text-black">Upcoming Events</h2>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="bg-white/20 p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-gray-700">Date: {event.date}</p>
                <p className="text-gray-700">Time: {event.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

