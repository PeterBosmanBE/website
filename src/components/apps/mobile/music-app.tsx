"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Heart,
  Shuffle,
  Repeat,
  Volume2,
  ListMusic,
  Clock,
  ChevronDown,
} from "lucide-react";
import { Slider } from "@/src/components/ui/slider";
import Image from "next/image";

const currentlyPlaying = {
  title: "Midnight Coding Session",
  artist: "Lo-Fi Beats",
  album: "Developer&apos;s Playlist",
  duration: "3:45",
  currentTime: "1:23",
  progress: 37,
  albumArt: "🎵",
  color: "from-green-600 to-emerald-800",
};

const recentlyPlayed = [
  {
    title: "Bug Fix Groove",
    artist: "Synth Wave",
    albumArt: "🎸",
    duration: "4:12",
  },
  {
    title: "Deploy to Production",
    artist: "Electronic Dreams",
    albumArt: "🎹",
    duration: "3:56",
  },
  {
    title: "Coffee & Code",
    artist: "Jazz Cafe",
    albumArt: "☕",
    duration: "5:23",
  },
  {
    title: "The Algorithm",
    artist: "Tech House",
    albumArt: "🤖",
    duration: "4:45",
  },
  {
    title: "Stack Overflow",
    artist: "Indie Chill",
    albumArt: "📚",
    duration: "3:18",
  },
];

const playlists = [
  { name: "Coding Focus", songs: 42, emoji: "💻" },
  { name: "Late Night Vibes", songs: 28, emoji: "🌙" },
  { name: "Workout Mix", songs: 35, emoji: "💪" },
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

export function MusicApp() {
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showNowPlaying, setShowNowPlaying] = useState(false);
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

  if (showNowPlaying) {
    return (
      <div
        className={`h-full bg-gradient-to-b ${currentlyPlaying.color} to-background flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setShowNowPlaying(false)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ChevronDown className="w-6 h-6 text-white" />
            {""}
          </button>
          <span className="text-white text-sm font-medium">Now Playing</span>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <ListMusic className="w-5 h-5 text-white" />
            {""}
          </button>
        </div>

        {/* Album Art */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="w-64 h-64 bg-black/30 rounded-2xl flex items-center justify-center text-8xl shadow-2xl">
            {nowPlayingArt ? (
              <Image
                src={nowPlayingArt}
                alt={nowPlaying?.name}
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            ) : (
              <span className="text-8xl flex items-center justify-center h-full">
                🎵
              </span>
            )}
          </div>
        </div>

        {/* Song Info */}
        <div className="px-6 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">
                {nowPlaying?.name ?? "—"}
              </h2>
              <p className="text-white/70">
                {nowPlaying?.artist["#text"] ?? "—"}
              </p>
            </div>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 transition-transform active:scale-95"
            >
              <Heart
                className={`w-6 h-6 ${
                  isLiked ? "text-green-400 fill-green-400" : "text-white/70"
                }`}
              />
              {""}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-6 mb-4">
          <Slider
            defaultValue={[currentlyPlaying.progress]}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between mt-1 text-xs text-white/60">
            <span>0:00</span>
            <span>{formatDuration(nowPlaying?.duration ?? "0")}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <button className="p-2 text-white/60 hover:text-white transition-colors">
            <Shuffle className="w-5 h-5" />
            {""}
          </button>
          <button className="p-2 text-white hover:scale-105 transition-transform">
            <SkipBack className="w-8 h-8" />
            {""}
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-black" />
            ) : (
              <Play className="w-8 h-8 text-black ml-1" />
            )}
            {""}
          </button>
          <button className="p-2 text-white hover:scale-105 transition-transform">
            <SkipForward className="w-8 h-8" />
            {""}
          </button>
          <button className="p-2 text-white/60 hover:text-white transition-colors">
            <Repeat className="w-5 h-5" />
            {""}
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-3 px-8 mb-8">
          <Volume2 className="w-4 h-4 text-white/60" />
          <Slider defaultValue={[70]} max={100} step={1} className="flex-1" />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden">
      <div className="p-4 pb-8 w-full max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">Music</h1>
          <p className="text-muted-foreground text-sm mt-1">
            My coding soundtrack
          </p>
        </div>

        {/* Now Playing Card */}
        <div
          onClick={() => setShowNowPlaying(true)}
          className={`w-full bg-gradient-to-br ${currentlyPlaying.color} rounded-2xl p-4 mb-6 text-left hover:opacity-95 transition-opacity cursor-pointer`}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setShowNowPlaying(true)}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-black/30 rounded-xl flex items-center justify-center text-2xl">
              {currentlyPlaying.albumArt}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold truncate">
                {currentlyPlaying.title}
              </p>
              <p className="text-white/70 text-sm truncate">
                {currentlyPlaying.artist}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(!isPlaying);
                }}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-black" />
                ) : (
                  <Play className="w-5 h-5 text-black ml-0.5" />
                )}
              </button>
            </div>
          </div>
          {/* Progress */}
          <div className="mt-3">
            <div className="h-1 bg-black/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/80 rounded-full"
                style={{ width: `${currentlyPlaying.progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Playlists */}
        <div className="mb-6">
          <h2 className="text-foreground font-semibold mb-3">My Playlists</h2>
          <div className="grid grid-cols-3 gap-3">
            {playlists.map((playlist, index) => (
              <button
                key={index}
                className="bg-card rounded-xl p-3 text-center hover:bg-muted/50 transition-colors"
              >
                <div className="text-2xl mb-1">{playlist.emoji}</div>
                <p className="text-foreground text-xs font-medium truncate">
                  {playlist.name}
                </p>
                <p className="text-muted-foreground text-xs">
                  {playlist.songs} songs
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Recently Played */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <h2 className="text-foreground font-semibold">Recently Played</h2>
          </div>
          <div className="bg-card rounded-2xl overflow-hidden divide-y divide-border">
            {loading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 p-3">
                    <div className="w-12 h-12 bg-muted rounded-lg animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-32 bg-muted rounded animate-pulse" />
                      <div className="h-2.5 w-20 bg-muted rounded animate-pulse" />
                    </div>
                  </div>
                ))
              : recentTracks.map((track, index) => {
                  const art = getAlbumArt(track);
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentTrack(index)}
                      className="w-full flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors text-left overflow-hidden"
                    >
                      <div className="w-12 h-12 bg-muted rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                        {art ? (
                          <Image
                            src={art}
                            alt={track.album["#text"]}
                            className="w-full h-full object-cover"
                            width={48}
                            height={48}
                          />
                        ) : (
                          <span className="text-xl">🎵</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0 overflow-hidden">
                        <p className="text-foreground text-sm font-medium truncate">
                          {track.name}
                        </p>
                        <p className="text-muted-foreground text-xs truncate">
                          {track.artist["#text"]}
                        </p>
                      </div>
                      <span className="text-muted-foreground text-xs flex-shrink-0">
                        {formatDuration(track.duration)}
                      </span>
                    </button>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}
