"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { AppId, WindowState } from "@/src/types/os";

interface DesktopContextType {
  windows: WindowState[];
  activeWindow: AppId | null;
  openWindow: (id: AppId) => void;
  closeWindow: (id: AppId) => void;
  minimizeWindow: (id: AppId) => void;
  focusWindow: (id: AppId) => void;
  updateWindowPosition: (id: AppId, position: { x: number; y: number }) => void;
  getHighestZIndex: () => number;
}

const DesktopContext = createContext<DesktopContextType | null>(null);

const defaultWindowSizes: Record<AppId, { width: number; height: number }> = {
  about: { width: 500, height: 400 },
  skills: { width: 550, height: 450 },
  experiences: { width: 600, height: 500 },
  education: { width: 500, height: 400 },
  projects: { width: 650, height: 500 },
  music: { width: 950, height: 650 },
  image: { width: 900, height: 600 },
};

const getInitialPosition = (id: AppId, index: number) => {
  const baseX = 100 + (index % 3) * 40;
  const baseY = 50 + (index % 3) * 40;
  return { x: baseX, y: baseY };
};

export function DesktopProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindow, setActiveWindow] = useState<AppId | null>(null);
  const [highestZ, setHighestZ] = useState(100);

  const getHighestZIndex = useCallback(() => highestZ, [highestZ]);

  const openWindow = useCallback((id: AppId) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.id === id);
      if (existing) {
        if (existing.isMinimized) {
          return prev.map((w) =>
            w.id === id ? { ...w, isMinimized: false, zIndex: highestZ + 1 } : w
          );
        }
        return prev.map((w) =>
          w.id === id ? { ...w, zIndex: highestZ + 1 } : w
        );
      }
      const newWindow: WindowState = {
        id,
        isOpen: true,
        isMinimized: false,
        position: getInitialPosition(id, prev.length),
        size: defaultWindowSizes[id],
        zIndex: highestZ + 1,
      };
      return [...prev, newWindow];
    });
    setHighestZ((z) => z + 1);
    setActiveWindow(id);
  }, [highestZ]);

  const closeWindow = useCallback((id: AppId) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    setActiveWindow((current) => (current === id ? null : current));
  }, []);

  const minimizeWindow = useCallback((id: AppId) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
    setActiveWindow((current) => (current === id ? null : current));
  }, []);

  const focusWindow = useCallback((id: AppId) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, zIndex: highestZ + 1, isMinimized: false } : w
      )
    );
    setHighestZ((z) => z + 1);
    setActiveWindow(id);
  }, [highestZ]);

  const updateWindowPosition = useCallback(
    (id: AppId, position: { x: number; y: number }) => {
      setWindows((prev) =>
        prev.map((w) => (w.id === id ? { ...w, position } : w))
      );
    },
    []
  );

  return (
    <DesktopContext.Provider
      value={{
        windows,
        activeWindow,
        openWindow,
        closeWindow,
        minimizeWindow,
        focusWindow,
        updateWindowPosition,
        getHighestZIndex,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
}

export function useDesktop() {
  const context = useContext(DesktopContext);
  if (!context) {
    throw new Error("useDesktop must be used within a DesktopProvider");
  }
  return context;
}
