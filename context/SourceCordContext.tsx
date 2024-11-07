import { createContext, ReactNode, useState } from "react";

export const SourceCordinateContext = createContext<any>(null);

export const SourceCordProvider = ({ children }: { children: ReactNode }) => {
  const [sourceCord, setSourceCord] = useState<any>({});

  return (
    <SourceCordinateContext.Provider value={{ sourceCord, setSourceCord }}>
      {children}
    </SourceCordinateContext.Provider>
  );
};
