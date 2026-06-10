"use client";
import Image from "next/image";
import { Window } from "../../os/desktop/window";
import { ImageIcon } from "lucide-react";
import { useImageStore } from "@/src/lib/image-store";

export function ImageWindow() {
  const { imageUrl, imageAlt } = useImageStore();
  return (
    <Window
      id="image"
      title={imageAlt + " - Image Viewer"}
      icon={<ImageIcon className="w-4 h-4" />}
    >
      <div className="flex items-center justify-center w-full h-full min-h-[300px] p-4">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt || imageUrl}
            className="max-w-full max-h-full object-contain rounded-md"
            width={900}
            height={600}
          />
        ) : (
          <p className="text-sm text-muted-foreground">No image selected.</p>
        )}
      </div>
    </Window>
  );
}
