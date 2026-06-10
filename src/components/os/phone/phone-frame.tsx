"use client"

import { useState, useEffect } from "react"
import { StatusBar } from "@/src/components/os/phone/status-bar"
import { HomeScreen } from "@/src/components/os/phone/home-screen"
import { AboutApp } from "@/src/components/apps/mobile/about-app"
import { SkillsApp } from "@/src/components/apps/mobile/skills-app"
import { ExperiencesApp } from "@/src/components/apps/mobile/experiences-app"
import { EducationApp } from "@/src/components/apps/mobile/education-app"
import { ProjectsApp } from "@/src/components/apps/mobile/projects-app"
import { MusicApp } from "@/src/components/apps/mobile/music-app"
import { NavigationBar } from "@/src/components/os/phone/navigation-bar"
import { ImageApp } from "@/src/components/apps/mobile/image-app"
import { useImageStore } from "@/src/lib/image-store"

export type AppType = "home" | "about" | "skills" | "experiences" | "education" | "projects" | "music" | "image"

export function PhoneFrame() {
  const [currentApp, setCurrentApp] = useState<AppType>("home")
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const { registerOpenImageApp } = useImageStore()

  useEffect(() => {
    registerOpenImageApp(() => openApp("image"))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const openApp = (app: AppType) => {
    if (app === currentApp) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentApp(app)
      setIsAnimating(false)
    }, 150)
  }

  const goHome = () => {
    if (currentApp === "home") return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentApp("home")
      setIsAnimating(false)
    }, 150)
  }

  const renderApp = () => {
    switch (currentApp) {
      case "about":
        return <AboutApp />
      case "skills":
        return <SkillsApp />
      case "experiences":
        return <ExperiencesApp />
      case "education":
        return <EducationApp />
      case "projects":
        return <ProjectsApp />
      case "music":
        return <MusicApp />
      case "image":
        return <ImageApp />
      default:
        return <HomeScreen onOpenApp={openApp} currentTime={currentTime} />
    }
  }

  return (
    <div className="relative flex flex-col w-full h-screen bg-background overflow-hidden">
      {/* Status Bar */}
      <StatusBar currentTime={currentTime} />

      {/* App Content */}
      <div
        className={`flex-1 overflow-hidden transition-all duration-150 ${
          isAnimating ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
        }`}
      >
        <div className="flex-1 overflow-hidden h-full flex flex-col">
          {renderApp()}
        </div>
      </div>

      {/* Navigation Bar */}
      <NavigationBar onHome={goHome} currentApp={currentApp} />
    </div>
  )
}
