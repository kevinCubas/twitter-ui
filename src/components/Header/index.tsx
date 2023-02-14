import "./Header.css";

import { Sparkle } from "phosphor-react";

interface IHeaderProps {
  pageTitle: string
}

export function Header({pageTitle}: IHeaderProps) {
  return (
    <header className="timeline-header">
      {pageTitle}
      <Sparkle />
    </header>
  )
}