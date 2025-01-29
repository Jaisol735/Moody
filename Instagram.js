import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"

export default function Instagram() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      navigate("/")
    }
    // Simulated Instagram posts
    setPosts([
      { id: 1, username: "user1", imageUrl: "https://picsum.photos/400/400", likes: 120, comments: 15 },
      { id: 2, username: "user2", imageUrl: "https://picsum.photos/400/401", likes: 85, comments: 7 },
      { id: 3, username: "user3", imageUrl: "https://picsum.photos/400/402", likes: 200, comments: 32 },
    ])
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-white to-orange-500 flex flex-col font-sans">
      <Navigation />
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full max-w-4xl bg-white/10 shadow-xl backdrop-blur-md rounded-3xl border border-white/20 p-6">
          <h2 className="text-center font-heading font-extrabold text-4xl mb-6 text-black">Instagram Feed</h2>
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white/20 shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                  <h3 className="text-xl font-bold text-black">{post.username}</h3>
                </div>
                <img src={post.imageUrl || "/placeholder.svg"} alt={`Post by ${post.username}`} className="w-full" />
                <div className="p-4 flex justify-between items-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Like ({post.likes})
                  </button>
                  <span className="text-gray-600">Comments: {post.comments}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

