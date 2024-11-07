import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface ILocation {
  latitude: number | null;
  longitude: number | null;
}

interface ILocationContext {
  userLocation: ILocation;
  setUserLocation: Dispatch<SetStateAction<ILocation>>;
}

export const UserLocationContext = createContext<ILocationContext | null>(null);

export function LocationContextProvider({ children }: { children: ReactNode }) {
  const [userLocation, setUserLocation] = useState<ILocation>({
    latitude:null,
    longitude:null
  });

  useEffect(() => {
    getUserLocation();
  }, []);

  function getUserLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation({
        longitude:pos.coords.longitude,
        latitude:pos.coords.latitude
      })
    });
  }

  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
}
