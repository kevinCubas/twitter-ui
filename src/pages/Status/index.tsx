import "./Status.css";

import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";

const answers = [
  "concordo",
  "Muito relevante",
  "SHOWW"
]

export function Status() {
  return (
    <main className="status">
      <Header pageTitle="Tweet" />

      <Tweet 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Autem recusandae exercitationem distinctio laborum beatae" 
      />
      <Separator />
      <form className="answer-form">
        <label htmlFor="tweet">
          <img src="https://github.com/kevinCubas.png" alt="" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>
        <button type="submit">Answer</button>

      </form>
      {answers.map(answer => <Tweet key={answer} content={answer} />)}
    </main>
  )
}