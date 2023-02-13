import "./Tweet.css";
import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";

export function Tweet() {
  return (
    <a href="#" className="tweet">
      <img src="https://github.com/kevinCubas.png" alt="" />
      <div className="tweet-content">
        <header className="tweet-content-header">
          <strong>Kevin Cubas</strong>
          <span>@kevin.cgk</span>
        </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, 
        <br />
        dolores in provident saepe qui asperiores exercitationem obcaecati 
        magnam, deleniti quae magni. Vitae praesentium accusantium delectus 
        <br />
        dolores, commodi id nesciunt! Et.
      </p>
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