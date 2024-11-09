import { createContext, ReactNode, useState } from "react";

export const DirectionDataContext = createContext<any>(null);

export function DirectionDataProvider({ children }: { children: ReactNode }) {
  const [directionData, setDirectionData] = useState<any>([]);

  return (
    <DirectionDataContext.Provider value={{ directionData, setDirectionData }}>
      {children}
    </DirectionDataContext.Provider>
  );
}
