"use client"

import { MapPin, Mail, ExternalLink, FolderOpen } from "lucide-react"
import { ScrollArea } from "@/src/components/ui/scroll-area"
import { userInfo, projects, clients } from "@/src/lib/data";
import Image from "next/image";

export function AboutApp() {
  const currentClientAmount = clients.length > 10 ? "10+" : clients.length;

  return (
    <ScrollArea className="h-full">
      <div className="p-4 pb-8 max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-3xl font-bold text-white">
            <Image src={userInfo.picture} alt={userInfo.name} width={80} height={80} className="rounded-full" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{userInfo.name}</h1>
            <p className="text-muted-foreground">Full Stack Developer</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <MapPin className="w-3 h-3" />
              <span>{userInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        {userInfo.bio && (
        <div className="bg-card rounded-2xl p-4 mb-4">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            About Me
          </h2>
          <p className="text-foreground leading-relaxed">
            <span>{userInfo.bio}</span>
          </p>
        </div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {userInfo.yearsOfExperience >= 2 && (
            <div className="bg-card rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-primary">5+</p>
              <p className="text-xs text-muted-foreground">Years Exp</p>
            </div>
          )}
          {projects.length >= 10 && (
            <div className="bg-card rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-primary">{projects.length}</p>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
          )}
          {clients.length >= 3 && (
            <div className="bg-card rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-primary">{currentClientAmount}</p>
              <p className="text-xs text-muted-foreground">Clients</p>
            </div>
          )}
        </div>

        {/* Contact Links */}
        <div className="bg-card rounded-2xl overflow-hidden">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide p-4 pb-2">
            Connect
          </h2>
          <div className="divide-y divide-border">
            <a
              href={`mailto:${userInfo.email}`}
              className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors"
            >
              <Mail className="w-5 h-5 text-blue-500" />
              <span className="text-foreground flex-1">{userInfo.email}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
            <a
              href={userInfo.github}
              className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors"
            >
              <FolderOpen className="w-5 h-5 text-foreground" />
              <span className="text-foreground flex-1">github.com/{userInfo.userName}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
            <a
              href={userInfo.linkedin}
              className="flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors"
            >
              <FolderOpen className="w-5 h-5 text-foreground" />
              <span className="text-foreground flex-1">linkedin.com/in/{userInfo.userName}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
