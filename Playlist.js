import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"

export default function Playlist() {
  const navigate = useNavigate()
  const [songs, setSongs] = useState([])

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      navigate("/")
    }
    // Simulated playlist data
    setSongs([
      { id: 1, title: "Calm Waters", artist: "Nature Sounds", duration: "3:45" },
      { id: 2, title: "Peaceful Mind", artist: "Meditation Masters", duration: "5:20" },
      { id: 3, title: "Soothing Melodies", artist: "Relaxation Experts", duration: "4:10" },
    ])
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-white to-orange-500 flex flex-col font-sans">
      <Navigation />
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full max-w-4xl bg-white/10 shadow-xl backdrop-blur-md rounded-3xl border border-white/20 p-6">
          <h2 className="text-center font-heading font-extrabold text-4xl mb-6 text-black">Spotify Playlist</h2>
          <div className="space-y-4">
            {songs.map((song) => (
              <div key={song.id} className="bg-white/20 p-4 rounded-lg shadow flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">{song.title}</h3>
                  <p className="text-gray-700">{song.artist}</p>
                </div>
                <p className="text-gray-700">{song.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

