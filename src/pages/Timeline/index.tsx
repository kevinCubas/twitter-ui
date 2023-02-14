import "./Timeline.css";

import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";

const tweets = [
  "Meu primeiro tweet",
  "twiteiro",
  "testando"
]

export function Timeline() {
  return (
    <main className="timeline">
      <Header pageTitle="Home" />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/kevinCubas.png" alt="" />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>
        <button type="submit">Tweet</button>

      </form>
      <Separator />
      {tweets.map(tweet => <Tweet key={tweet} content={tweet} />)}
    </main>
  )
}