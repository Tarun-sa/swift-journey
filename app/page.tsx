"use client";
import Booking from "@/components/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import { DestinationCordProvider } from "@/context/DestinationCordContext";
import { DirectionDataProvider } from "@/context/DirectionDataContext";
import { SourceCordProvider } from "@/context/SourceCordContext";
import { LocationContextProvider } from "@/context/UserLocationContext";

export default function Home() {
  return (
    <div>
      <LocationContextProvider>
        <SourceCordProvider>
          <DestinationCordProvider>
            <DirectionDataProvider>
              <div className="grid grid-cols-1 custom:grid-cols-3">
                <div className="">
                  <Booking />
                </div>
                <div className="col-span-2 order-first custom:order-last">
                  <MapBoxMap />
                </div>
              </div>
            </DirectionDataProvider>
          </DestinationCordProvider>
        </SourceCordProvider>
      </LocationContextProvider>
    </div>
  );
}
