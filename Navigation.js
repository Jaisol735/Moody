import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Calendar, Gift, BarChart2, Dumbbell, Music, MessageCircle, Instagram, Twitter } from "lucide-react";
import "C:/Users/jaina/OneDrive/Desktop/Jainam/programs/Project/datathon2/frontend/src/components/Navigation.css"
const navItems = [
  { name: "Home", path: "/dashboard", icon: Home },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Events", path: "/events", icon: Calendar },
  { name: "Rewards", path: "/reward", icon: Gift },
  { name: "Statistics", path: "/statistics", icon: BarChart2 },
  { name: "Fitness", path: "/fitness", icon: Dumbbell },
  { name: "Playlist", path: "/playlist", icon: Music },
  { name: "Chatbot", path: "/chatbot", icon: MessageCircle },
  { name: "Instagram", path: "/instagram", icon: Instagram },
  { name: "Twitter", path: "/twitter", icon: Twitter },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="nav-brand">
          <span>MOODy</span>
        </div>
        <div className="nav-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
              >
                <Icon className="nav-icon" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
