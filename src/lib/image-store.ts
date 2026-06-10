import { create } from "zustand";

interface ImageStore {
  imageUrl: string | null;
  imageAlt: string | null;
  setImage: (url: string, alt: string) => void;
  onOpenImageApp: (() => void) | null;
  registerOpenImageApp: (fn: () => void) => void;
}

export const useImageStore = create<ImageStore>((set) => ({
  imageUrl: null,
  imageAlt: null,
  setImage: (url, alt) => set({ imageUrl: url, imageAlt: alt }),
  onOpenImageApp: null,
  registerOpenImageApp: (fn) => set({ onOpenImageApp: fn }),
}))