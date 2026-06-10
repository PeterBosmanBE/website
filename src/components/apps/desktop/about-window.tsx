"use client";

import { Window } from "../../os/desktop/window";
import { User, Mail, MapPin, ExternalLink, FolderOpen } from "lucide-react";
import { clients, projects, userInfo } from "@/src/lib/data";
import Image from "next/image";

export function AboutWindow() {
  const currentClientAmount = clients.length > 10 ? "10+" : clients.length;
  
  return (
    <Window id="about" title="About Me" icon={<User className="w-4 h-4" />}>
      <div className="p-6 space-y-6">
        {/* Profile Header */}
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-primary-foreground">
            <Image src={userInfo.picture} alt={userInfo.name} width={80} height={80} className="rounded-full" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{userInfo.name}</h1>
            <p className="text-primary font-medium">Full Stack Developer</p>
            <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
              <MapPin className="w-3 h-3" />
              <span>{userInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        {userInfo.bio && (
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            About
          </h2>
          <p className="text-foreground/80 leading-relaxed">
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
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Connect
          </h2>
          <div className="grid gap-2">
            <a
              href={`mailto:${userInfo.email}`}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary/60 transition-colors group"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-foreground/80 group-hover:text-foreground">{userInfo.email}</span>
            </a>
            <a
              href={userInfo.github}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary/60 transition-colors group"
            >
              <FolderOpen className="w-4 h-4 text-primary" />
              <span className="text-foreground/80 group-hover:text-foreground">github.com/{userInfo.userName}</span>
              <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground" />
            </a>
            <a
              href={userInfo.linkedin}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary/60 transition-colors group"
            >
              <FolderOpen className="w-4 h-4 text-primary" />
              <span className="text-foreground/80 group-hover:text-foreground">linkedin.com/in/{userInfo.userName}</span>
              <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </Window>
  );
}
