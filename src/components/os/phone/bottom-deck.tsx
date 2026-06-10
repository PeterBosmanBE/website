import { User } from "lucide-react";
import type { AppType } from "./phone-frame";
import { userInfo } from "@/src/lib/data";
import Image from "next/image";

interface HomeScreenProps {
  onOpenApp: (app: AppType) => void;
  currentTime: Date;
}

export function BottomDeck() {
  return (
    <div className="mt-auto pb-2">
      <div className="bg-muted/30 backdrop-blur-xl rounded-3xl p-3">
        <div className="flex justify-around">
          {/* LinkedIn */}
          <a href={userInfo.linkedin} target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/images/socials/color/linkedin.png"
              alt="LinkedIn"
              width={100}
              height={100}
              className="w-14 h-14 rounded-2xl flex items-center justify-center active:scale-90 transition-transform shadow-md"
            />
          </a>
          {/* GitHub */}
          <a href={userInfo.github} target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/images/socials/color/github.png"
              alt="GitHub"
              width={100}
              height={100}
              className="w-14 h-14 rounded-2xl flex items-center justify-center active:scale-90 transition-transform shadow-md"
            />
          </a>
          {/* YouTube */}
          <a href={userInfo.youtube} target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/images/socials/color/youtube.png"
              alt="YouTube"
              width={100}
              height={100}
              className="w-14 h-14 rounded-2xl flex items-center justify-center active:scale-90 transition-transform shadow-md"
            />
          </a>
          {/* Instagram */}
          <a href={userInfo.instagram} target="_blank" rel="noopener noreferrer">
            <Image
              src="/assets/images/socials/color/instagram.png"
              alt="Instagram"
              width={100}
              height={100}
              className="w-14 h-14 rounded-2xl flex items-center justify-center active:scale-90 transition-transform shadow-md"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
