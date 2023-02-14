import React from "react"
import ReactDOM from "react-dom/client"

import {Sparkle} from "phosphor-react"

import "./global.css"

import { Tweet } from "./components/Tweet"
import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/Header"
import { Separator } from "./components/Separator"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <Sidebar />
      <div className='content'>
        <main className="timeline">
          <Header pageName="Home" />
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/kevinCubas.png" alt="" />
              <textarea id="tweet" placeholder="What's happening?"/>
            </label>
            <button type="submit">Tweet</button>
            
          </form>
          <Separator />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
