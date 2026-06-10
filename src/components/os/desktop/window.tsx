"use client";

import { useRef, useState, useCallback, type ReactNode, useEffect } from "react";
import { X, Minus, Square } from "lucide-react";
import { useDesktop } from "./desktop-context";
import type { AppId } from "@/src/types/os";
import { cn } from "@/src/lib/utils";

interface WindowProps {
  id: AppId;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Window({ id, title, icon, children, className }: WindowProps) {
  const { windows, activeWindow, closeWindow, minimizeWindow, focusWindow, updateWindowPosition } = useDesktop();
  const windowState = windows.find((w) => w.id === id);
  const windowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest('button')) return;
      
      focusWindow(id);
      setIsDragging(true);
      const rect = windowRef.current?.getBoundingClientRect();
      if (rect) {
        dragOffset.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
    },
    [focusWindow, id]
  );

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newX = Math.max(0, e.clientX - dragOffset.current.x);
      const newY = Math.max(0, e.clientY - dragOffset.current.y);
      updateWindowPosition(id, { x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, id, updateWindowPosition]);

  if (!windowState || !windowState.isOpen || windowState.isMinimized) {
    return null;
  }

  const isActive = activeWindow === id;

  return (
    <div
      ref={windowRef}
      className={cn(
        "fixed rounded-lg overflow-hidden shadow-2xl window-open",
        "border border-border/50",
        isActive ? "ring-1 ring-primary/30" : "",
        className
      )}
      style={{
        left: windowState.position.x,
        top: windowState.position.y,
        width: windowState.size.width,
        height: windowState.size.height,
        zIndex: windowState.zIndex,
        backgroundColor: "var(--window-bg)",
      }}
      onClick={() => focusWindow(id)}
    >
      {/* Window Header */}
      <div
        className={cn(
          "flex items-center justify-between px-3 py-2 cursor-move select-none",
          "border-b border-border/30"
        )}
        style={{ backgroundColor: "var(--window-header)" }}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <span className="text-primary">{icon}</span>
          <span className="text-sm font-medium text-foreground/90">{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => minimizeWindow(id)}
            className="p-1.5 rounded hover:bg-secondary/80 transition-colors"
          >
            <Minus className="w-3.5 h-3.5 text-muted-foreground" />
            {""}
          </button>
          <button
            className="p-1.5 rounded hover:bg-secondary/80 transition-colors cursor-not-allowed opacity-50"
            disabled
          >
            <Square className="w-3.5 h-3.5 text-muted-foreground" />
            {""}
          </button>
          <button
            onClick={() => closeWindow(id)}
            className="p-1.5 rounded hover:bg-destructive/80 transition-colors group"
          >
            <X className="w-3.5 h-3.5 text-muted-foreground group-hover:text-destructive-foreground" />
            {""}
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="overflow-auto" style={{ height: "calc(100% - 41px)" }}>
        {children}
      </div>
    </div>
  );
}
