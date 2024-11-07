"use client";
import Booking from "@/components/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import { DestinationCordProvider } from "@/context/DestinationCordContext";
import { SourceCordProvider } from "@/context/SourceCordContext";
import { LocationContextProvider } from "@/context/UserLocationContext";

export default function Home() {
  return (
    <div>
      <LocationContextProvider>
        <SourceCordProvider>
          <DestinationCordProvider>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="">
                <Booking />
              </div>
              <div className="col-span-2 order-first md:order-last">
                <MapBoxMap />
              </div>
            </div>
          </DestinationCordProvider>
        </SourceCordProvider>
      </LocationContextProvider>
    </div>
  );
}
