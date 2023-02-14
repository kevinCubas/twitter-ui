import "./Tweet.css";
import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";

interface ITweetProps {
  content: string
}

export function Tweet({content}:ITweetProps) {
  return (
    <a href="#" className="tweet">
      <img src="https://github.com/kevinCubas.png" alt="" />
      <div className="tweet-content">
        <header className="tweet-content-header">
          <strong>Kevin Cubas</strong>
          <span>@kevin.cgk</span>
        </header>
      <p>{content}</p>
      <footer className="tweet-content-footer">
        <button type="button">
          <ChatCircle />
          10
        </button>
        <button type="button">
          <ArrowClockwise />
          10
        </button>
        <button type="button">
          <Heart />
          10
        </button>
      </footer>
      </div>
    </a>
  )
}