import { useImageStore } from "@/src/lib/image-store"
import { ScrollArea } from "@/src/components/ui/scroll-area"

export function ImageApp() {
  const { imageUrl, imageAlt } = useImageStore()

  return (
    <ScrollArea className="h-full">
      <div className="flex items-center justify-center w-full h-full min-h-[300px] p-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt ?? "Project preview"}
            className="max-w-full max-h-full object-contain rounded-md"
          />
        ) : (
          <p className="text-sm text-muted-foreground">No image selected.</p>
        )}
      </div>
    </ScrollArea>
  )
}