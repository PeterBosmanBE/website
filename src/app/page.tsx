"use client";
import { Desktop } from "../components/os/desktop/desktop";
import { PhoneFrame } from "../components/os/phone/phone-frame";
import RotationGuard from "../components/rotation-guard";
import useDeviceType from "../hooks/use-device-type";

export default function Home() {
    const isMobile = useDeviceType() === "mobile";
    return isMobile ? (
      <RotationGuard>
        <PhoneFrame />
      </RotationGuard>
    ) : (
      <Desktop />
    );
}
