import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { GiftIcon, SmileIcon, CalendarIcon, MessageCircleIcon, DumbbellIcon, MusicIcon } from "lucide-react"
import Navigation from "../components/Navigation"

export default function Dashboard() {
  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      navigate("/")
    }
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-white to-orange-500 flex flex-col font-sans">
      <Navigation />
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full max-w-4xl bg-white/10 shadow-xl backdrop-blur-md rounded-3xl border border-white/20 p-6">
          <h2 className="text-center font-heading font-extrabold text-4xl mb-2 text-black">Dashboard</h2>
          <h2 className="text-xl text-black mb-6 font-heading text-center">Choose an option to get started</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <DashboardButton
              href="/mood-analyzer"
              icon={<SmileIcon className="h-8 w-8" />}
              label="Mood Analyzer"
              gradient="from-green-400 to-blue-500"
              hoverGradient="from-green-500 to-blue-600"
            />
            <DashboardButton
              href="/events"
              icon={<CalendarIcon className="h-8 w-8" />}
              label="Events"
              gradient="from-purple-400 to-pink-500"
              hoverGradient="from-purple-500 to-pink-600"
            />
            <DashboardButton
              href="/reward"
              icon={<GiftIcon className="h-8 w-8" />}
              label="Reward"
              gradient="from-yellow-400 to-orange-500"
              hoverGradient="from-yellow-500 to-orange-600"
            />
            <DashboardButton
              href="/chatbot"
              icon={<MessageCircleIcon className="h-8 w-8" />}
              label="Customer Support"
              gradient="from-blue-400 to-indigo-500"
              hoverGradient="from-blue-500 to-indigo-600"
            />
            <DashboardButton
              href="/fitness"
              icon={<DumbbellIcon className="h-8 w-8" />}
              label="Fitness"
              gradient="from-red-400 to-pink-500"
              hoverGradient="from-red-500 to-pink-600"
            />
            <DashboardButton
              href="/playlist"
              icon={<MusicIcon className="h-8 w-8" />}
              label="Spotify Playlist"
              gradient="from-green-400 to-teal-500"
              hoverGradient="from-green-500 to-teal-600"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const DashboardButton = ({ href, icon, label, gradient, hoverGradient }) => (
  <Link
    to={href}
    className={`block w-full h-32 bg-gradient-to-r ${gradient} hover:bg-gradient-to-r hover:${hoverGradient} text-white font-bold py-3 px-6 rounded-xl transform transition duration-200 hover:scale-105 flex flex-col items-center justify-center`}
  >
    {icon}
    <span className="mt-2">{label}</span>
  </Link>
);

