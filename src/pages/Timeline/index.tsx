import "./Timeline.css";

import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";
import { useState } from "react";

export function Timeline() {
  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "twiteiro",
    "testando"
  ])
  const [newTweet, setNewTweet] = useState("")

  const createNewTweet = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setTweets([newTweet, ...tweets ])
    setNewTweet("")
  }
  
  return (
    <main className="timeline">
      <Header pageTitle="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/kevinCubas.png" alt="" />
          <textarea 
            id="tweet" 
            placeholder="What's happening?"
            value={newTweet}
            onChange={(event) => setNewTweet(event.target.value)}
            />
        </label>
        <button type="submit">Tweet</button>

      </form>
      <Separator />
      {tweets.map(tweet => <Tweet key={tweet} content={tweet} />)}
    </main>
  )
}