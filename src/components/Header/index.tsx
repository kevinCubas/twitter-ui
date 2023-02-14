import "./Header.css";

import { Sparkle } from "phosphor-react";

interface IHeaderProps {
  pageName: string
}

export function Header({pageName}: IHeaderProps) {
  return (
    <header className="timeline-header">
      {pageName}
      <Sparkle />
    </header>
  )
}