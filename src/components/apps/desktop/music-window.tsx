"use client";

import { useEffect, useState } from "react";
import { Window } from "../../os/desktop/window";
import {
  Music,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
  Heart,
  Home,
  Search,
  Library,
  Clock,
  MoreHorizontal,
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import TrackRowSkeleton from "../../ui/track-row-skeleton";
import Image from "next/image";

const recentlyPlayed = [
  {
    title: "Debug Mode",
    artist: "Console Log",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Git Push",
    artist: "Version Control",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Deploy Friday",
    artist: "CI/CD Pipeline",
    color: "from-red-500 to-orange-600",
  },
  {
    title: "Merge Conflict",
    artist: "Team Collab",
    color: "from-blue-500 to-indigo-600",
  },
];

type LastFMTrack = {
  name: string;
  artist: { "#text": string };
  album: { "#text": string };
  duration: string;
  image: {
    "#text": string;
    size: "small" | "medium" | "large" | "extralarge";
  }[];
  "@attr"?: { nowplaying: "true" };
};

function getAlbumArt(
  track: LastFMTrack,
  size: "medium" | "large" | "extralarge" = "medium",
) {
  const preferred = track.image.find((i) => i.size === size)?.["#text"];
  if (preferred) return preferred;

  // Fall back through sizes if preferred is empty
  const fallbackOrder: ("extralarge" | "large" | "medium" | "small")[] = [
    "extralarge",
    "large",
    "medium",
    "small",
  ];
  return (
    track.image.find((i) => fallbackOrder.includes(i.size) && i["#text"])?.[
      "#text"
    ] ?? null
  );
}

export function MusicWindow() {
  const [loading, setLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [progress] = useState(35);
  const [volume] = useState(75);
  const [recentTracks, setRecentTracks] = useState<LastFMTrack[]>([]);
  const nowPlaying = recentTracks[currentTrack];
  const nowPlayingArt = nowPlaying
    ? getAlbumArt(nowPlaying, "extralarge")
    : null;

  useEffect(() => {
    fetch("/api/lastfm")
      .then((r) => r.json())
      .then((data) => {
        setRecentTracks(data.recenttracks?.track ?? []);
        setLoading(false);
      });
  }, []);

  function formatDuration(seconds: string) {
    const s = parseInt(seconds);
    if (!s) return "--:--";
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  }

  return (
    <Window
      id="music"
      title="Music Player"
      icon={<Music className="w-4 h-4" />}
    >
      <div className="flex h-full bg-gradient-to-b from-card/50 to-background">
        {/* Sidebar */}
        <div className="w-56 bg-black/40 p-4 flex flex-col gap-6">
          {/* Navigation */}
          <nav className="space-y-2">
            <button className="flex items-center gap-3 text-foreground font-semibold w-full p-2 rounded hover:bg-white/10 transition-colors">
              <Home className="w-5 h-5" />
              <span className="text-sm">Home</span>
            </button>
            <button className="flex items-center gap-3 text-muted-foreground w-full p-2 rounded hover:bg-white/10 hover:text-foreground transition-colors">
              <Search className="w-5 h-5" />
              <span className="text-sm">Search</span>
            </button>
            <button className="flex items-center gap-3 text-muted-foreground w-full p-2 rounded hover:bg-white/10 hover:text-foreground transition-colors">
              <Library className="w-5 h-5" />
              <span className="text-sm">Your Library</span>
            </button>
          </nav>

          {/* Playlists */}
          <div className="flex-1">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-2">
              Playlists
            </h3>
            <div className="space-y-1">
              <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground p-2 rounded hover:bg-white/10 transition-colors truncate">
                Coding Flow
              </button>
              <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground p-2 rounded hover:bg-white/10 transition-colors truncate">
                Late Night Debug
              </button>
              <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground p-2 rounded hover:bg-white/10 transition-colors truncate">
                Focus Mode
              </button>
              <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground p-2 rounded hover:bg-white/10 transition-colors truncate">
                Deploy Day Hits
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Content Area */}
          <div className="flex-1 overflow-auto p-6">
            {/* Recently Played */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">
                  Recently Played
                </h2>
                <button className="text-xs text-muted-foreground hover:text-foreground hover:underline transition-colors">
                  Show all
                </button>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {recentlyPlayed.map((item, index) => (
                  <button
                    key={index}
                    className="group bg-white/5 hover:bg-white/10 rounded-md p-3 transition-all text-left"
                  >
                    <div
                      className={cn(
                        "aspect-square rounded-md mb-3 bg-gradient-to-br flex items-center justify-center shadow-lg",
                        item.color,
                      )}
                    >
                      <Music className="w-8 h-8 text-white/80" />
                    </div>
                    <p className="text-sm font-medium text-foreground truncate">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {item.artist}
                    </p>
                  </button>
                ))}
              </div>
            </section>

            {/* Current Playlist */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">
                  Now Playing Queue
                </h2>
              </div>

              {/* Playlist Header */}
              <div className="grid grid-cols-[16px_1fr_1fr_80px] gap-4 px-4 py-2 text-xs text-muted-foreground border-b border-border/30 mb-2">
                <span>#</span>
                <span>Title</span>
                <span>Album</span>
                <span className="flex justify-end">
                  <Clock className="w-4 h-4" />
                </span>
              </div>

              {/* Playlist Items */}
              <div className="space-y-1">
                {loading
                  ? Array.from({ length: 5 }).map((_, i) => (
                      <TrackRowSkeleton key={i} index={i} />
                    ))
                  : recentTracks.map((track, index) => {
                      const art = getAlbumArt(track);
                      return (
                        <button
                          key={index}
                          onClick={() => setCurrentTrack(index)}
                          className={cn(
                            "w-full grid grid-cols-[16px_1fr_1fr_80px] gap-4 px-4 py-2 rounded-md transition-all text-left group",
                            index === currentTrack
                              ? "bg-white/20 text-primary"
                              : "hover:bg-white/10 text-foreground/80",
                          )}
                        >
                          <span className="text-sm text-muted-foreground group-hover:text-foreground self-center">
                            {index === currentTrack && isPlaying ? (
                              <span className="text-primary">
                                <Music className="w-3.5 h-3.5" />
                              </span>
                            ) : (
                              index + 1
                            )}
                          </span>
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className={cn(
                                "w-10 h-10 rounded flex-shrink-0 bg-gradient-to-br flex items-center justify-center",
                              )}
                            >
                              {art ? (
                                <Image
                                  src={art}
                                  alt={track.album["#text"]}
                                  className="w-full h-full object-cover"
                                  width={40}
                                  height={40}
                                />
                              ) : (
                                <Music className="w-4 h-4 text-white/80 m-auto mt-3" />
                              )}
                            </div>
                            <div className="min-w-0">
                              <p
                                className={cn(
                                  "text-sm font-medium truncate",
                                  index === currentTrack
                                    ? "text-primary"
                                    : "text-foreground",
                                )}
                              >
                                {track.name}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">
                                {track.artist["#text"]}
                              </p>
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground self-center truncate">
                            {track.album["#text"]}
                          </span>
                          <div className="flex items-center justify-end gap-2">
                            <MoreHorizontal className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-sm text-muted-foreground">
                              {formatDuration(track.duration)}
                            </span>
                          </div>
                        </button>
                      );
                    })}
              </div>
            </section>
          </div>

          {/* Now Playing Bar */}
          <div className="h-24 bg-gradient-to-r from-card via-card to-card border-t border-border/30 px-4 flex items-center">
            {/* Current Track Info */}
            <div className="flex items-center gap-4 w-72">
              <div
                className={cn(
                  "w-14 h-14 rounded bg-gradient-to-br flex items-center justify-center shadow-lg flex-shrink-0",
                )}
              >
                {nowPlayingArt ? (
                  <Image
                    src={nowPlayingArt}
                    alt={nowPlaying.album["#text"] ?? ""}
                    className="w-full h-full object-cover"
                    width={50}
                    height={50}
                  />
                ) : (
                  <Music className="w-6 h-6 text-white/80 m-auto mt-4" />
                )}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {nowPlaying?.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {nowPlaying?.artist["#text"]}
                </p>
              </div>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={cn(
                  "p-1.5 transition-colors flex-shrink-0",
                  isLiked
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Heart className={cn("w-4 h-4", isLiked && "fill-current")} />
                {""}
              </button>
            </div>

            {/* Player Controls */}
            <div className="flex-1 flex flex-col items-center gap-2 px-4">
              <div className="flex items-center gap-4">
                <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
                  <Shuffle className="w-4 h-4" />
                  {""}
                </button>
                <button className="p-1.5 text-foreground hover:text-primary transition-colors">
                  <SkipBack className="w-5 h-5" />
                  {""}
                </button>
                <button className="p-2.5 rounded-full bg-foreground text-background hover:scale-105 transition-transform">
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </button>
                <button className="p-1.5 text-foreground hover:text-primary transition-colors">
                  <SkipForward className="w-5 h-5" />
                  {""}
                </button>
                <button className="p-1.5 text-muted-foreground hover:text-foreground transition-colors">
                  <Repeat className="w-4 h-4" />
                  {""}
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full max-w-md flex items-center gap-2">
                <span className="text-xs text-muted-foreground w-10 text-right">
                  0:00
                </span>
                <div className="flex-1 h-1 bg-white/20 rounded-full group cursor-pointer">
                  <div
                    className="h-full bg-foreground group-hover:bg-primary rounded-full relative transition-colors"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <span className="text-xs text-muted-foreground w-10">
                  {formatDuration(nowPlaying?.duration || "0")}
                </span>
              </div>
            </div>

            {/* Volume */}
            <div className="w-40 flex items-center justify-end gap-2">
              <Volume2 className="w-4 h-4 text-muted-foreground" />
              <div className="w-24 h-1 bg-white/20 rounded-full group cursor-pointer">
                <div
                  className="h-full bg-foreground group-hover:bg-primary rounded-full relative transition-colors"
                  style={{ width: `${volume}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}
