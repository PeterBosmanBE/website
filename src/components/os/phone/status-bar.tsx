"use client"

import { Wifi, Signal, Battery } from "lucide-react"

interface StatusBarProps {
  currentTime: Date
}

export function StatusBar({ currentTime }: StatusBarProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    })
  }

  return (
    <div className="flex items-center justify-between px-6 h-10 bg-background/90 backdrop-blur-sm flex-shrink-0 max-w-full">
      <span className="text-sm font-semibold text-foreground tabular-nums">
        {formatTime(currentTime)}
      </span>
      <div className="flex items-center gap-2">
        <Signal className="w-4 h-4 text-foreground" />
        <Wifi className="w-4 h-4 text-foreground" />
        <div className="flex items-center gap-1">
          <Battery className="w-5 h-5 text-foreground" />
          <span className="text-xs font-medium text-foreground">100</span>
        </div>
      </div>
    </div>
  )
}
