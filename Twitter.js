import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"

export default function Twitter() {
  const navigate = useNavigate()
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      navigate("/")
    }
    // Simulated tweets
    setTweets([
      { id: 1, username: "user1", content: "Just finished a great workout! #fitness", likes: 15, retweets: 3 },
      {
        id: 2,
        username: "user2",
        content: 'New blog post: "10 Tips for Better Sleep" Check it out!',
        likes: 27,
        retweets: 8,
      },
      { id: 3, username: "user3", content: "Beautiful day for a run! #running #health", likes: 42, retweets: 12 },
    ])
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-white to-orange-500 flex flex-col font-sans">
      <Navigation />
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="w-full max-w-4xl bg-white/10 shadow-xl backdrop-blur-md rounded-3xl border border-white/20 p-6">
          <h2 className="text-center font-heading font-extrabold text-4xl mb-6 text-black">Twitter Feed</h2>
          <div className="space-y-6">
            {tweets.map((tweet) => (
              <div key={tweet.id} className="bg-white/20 shadow-md rounded-lg p-4">
                <h3 className="text-xl font-bold text-black">@{tweet.username}</h3>
                <p className="text-gray-700 mb-4">{tweet.content}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Like ({tweet.likes})
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Retweet ({tweet.retweets})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

