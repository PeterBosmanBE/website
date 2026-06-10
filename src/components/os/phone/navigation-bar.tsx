"use client"

import { Home, ChevronLeft, Square } from "lucide-react"
import type { AppType } from "./phone-frame"

interface NavigationBarProps {
  onHome: () => void
  currentApp: AppType
}

export function NavigationBar({ onHome, currentApp }: NavigationBarProps) {
  const isHome = currentApp === "home"

  return (
    <div className="relative h-14 bg-background/90 backdrop-blur-sm border-t border-border/40 flex-shrink-0">
      <div className="flex items-center justify-around h-full px-6 max-w-lg mx-auto">
        {/* Back */}
        <button
          onClick={onHome}
          disabled={isHome}
          className="p-3 rounded-full hover:bg-muted/50 transition-colors active:scale-90 disabled:opacity-20"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>

        {/* Home */}
        <button
          onClick={onHome}
          className="p-3 rounded-full hover:bg-muted/50 transition-colors active:scale-90"
          aria-label="Home"
        >
          <Home className={`w-6 h-6 ${isHome ? "text-primary" : "text-foreground"}`} />
        </button>

        {/* Recents (decorative) */}
        <button
          className="p-3 rounded-full hover:bg-muted/50 transition-colors active:scale-90"
          aria-label="Recents"
        >
          <Square className="w-5 h-5 text-foreground/60 rounded" />
        </button>
      </div>

      {/* Home indicator pill */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-foreground/20 rounded-full" />
    </div>
  )
}
