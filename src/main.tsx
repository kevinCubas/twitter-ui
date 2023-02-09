import React from 'react'
import ReactDOM from 'react-dom/client'

import "./global.css"

import twitterLogo from "./assets/logo-twitter.svg"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className='sidebar'>
        <img src={twitterLogo} alt="Logo" />

        <nav></nav>
        <button>Tweet</button>
      </aside>
      <div className="content">
        Content
      </div>
    </div>
  </React.StrictMode>,
)
