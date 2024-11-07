import { createContext, ReactNode, useState } from "react";

export const DestinationCordinateContext = createContext<any>(null);

export const DestinationCordProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [destinationCord, setDestinationCord] = useState<any>({});
  return (
    <DestinationCordinateContext.Provider
      value={{ destinationCord, setDestinationCord }}
    >
        {children}
    </DestinationCordinateContext.Provider>
  );
};
