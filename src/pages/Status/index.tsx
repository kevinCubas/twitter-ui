import "./Status.css";

import { Header } from "../../components/Header";
import { Separator } from "../../components/Separator";
import { Tweet } from "../../components/Tweet";
import { useState } from "react";
import { PaperPlaneRight } from "phosphor-react";


export function Status() {
  const [answers, setAnswers] = useState([
    "concordo",
    "Muito relevante",
    "SHOWW"
  ])
  const [newAnswer, setNewAnswer] = useState("")

  const createNewAnswer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer("")
  }
  const handleHotKeySubmit = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && event.ctrlKey || event.metaKey) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer("")
    }
  }

  return (
    <main className="status">
      <Header pageTitle="Tweet" />

      <Tweet
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Autem recusandae exercitationem distinctio laborum beatae"
      />
      <Separator />
      <form onSubmit={createNewAnswer} className="answer-form">
        <label htmlFor="tweet">
          <img src="https://github.com/kevinCubas.png" alt="" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onChange={(event) => setNewAnswer(event.target.value)}
            onKeyDown={handleHotKeySubmit}
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>

      </form>
      {answers.map(answer => <Tweet key={answer} content={answer} />)}
    </main>
  )
}