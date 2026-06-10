"use client"

import {
  User,
  Sparkles,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Music,
} from "lucide-react"
import type { AppType } from "./phone-frame"
import { BottomDeck } from "./bottom-deck"

interface HomeScreenProps {
  onOpenApp: (app: AppType) => void
  currentTime: Date
}

const apps = [
  { id: "about" as AppType, name: "About", icon: User, color: "bg-blue-500" },
  { id: "skills" as AppType, name: "Skills", icon: Sparkles, color: "bg-amber-500" },
  { id: "experiences" as AppType, name: "Work", icon: Briefcase, color: "bg-emerald-500" },
  { id: "education" as AppType, name: "Education", icon: GraduationCap, color: "bg-rose-500" },
  { id: "projects" as AppType, name: "Projects", icon: FolderKanban, color: "bg-cyan-500" },
  { id: "music" as AppType, name: "Music", icon: Music, color: "bg-green-500" },
]

export function HomeScreen({ onOpenApp, currentTime }: HomeScreenProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="h-full flex flex-col px-6 py-4 max-w-lg mx-auto w-full">
      {/* Date & Time Widget */}
      <div className="text-center mb-8 mt-6">
        <p className="text-7xl font-light text-foreground tracking-tight">
          {formatTime(currentTime)}
        </p>
        <p className="text-muted-foreground mt-2 text-sm">
          {formatDate(currentTime)}
        </p>
      </div>

      {/* App Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => onOpenApp(app.id)}
              className="flex flex-col items-center gap-2 p-2 rounded-2xl hover:bg-muted/30 transition-all active:scale-90"
            >
              <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                <app.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs text-foreground font-medium">{app.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Dock */}
      <BottomDeck />
    </div>
  )
}
