import { generateUUID } from "@/app/api/search-address/route";
import { DestinationCordinateContext } from "@/context/DestinationCordContext";
import { SourceCordinateContext } from "@/context/SourceCordContext";
import React, { useContext, useEffect, useState } from "react";

const MAPBOX_MARKER_URL =
  "https://api.mapbox.com/search/searchbox/v1/retrieve";



const AutoCompleteAddress = () => {
  const [sourceAddress, setSourceAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [addressLists, setAddressLists] = useState<any>([]);
  const [activeField, setActiveField] = useState<
    "source" | "destination" | null
  >(null);

  const { setSourceCord } = useContext(SourceCordinateContext);
  const { setDestinationCord } = useContext(DestinationCordinateContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeField) getAddressList();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [sourceAddress, destinationAddress, activeField]);

  const getAddressList = async () => {
    const query = activeField === "source" ? sourceAddress : destinationAddress;
    const response = await fetch(`/api/search-address?q=${query}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setAddressLists(data);
  };

  const sessionToken = generateUUID();

  const onSourceAddressClick = async (item: any) => {
    setSourceAddress(item.name + ", " + item.full_address);
    setAddressLists([]);
    setActiveField(null);

    const response = await fetch(
      `${MAPBOX_MARKER_URL}/${item.mapbox_id}?session_token=${sessionToken}&country=IN&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
    );
    const data = await response.json();
 

    setSourceCord({
      latitude: data.features[0].geometry.coordinates[1],
      longitude: data.features[0].geometry.coordinates[0],
    });
  };

  const onDestinationAddressClick = async (item: any) => {
    setDestinationAddress(item.name + ", " + item.full_address);
    setAddressLists([]);
    setActiveField(null);
    const response = await fetch(
      `${MAPBOX_MARKER_URL}/${item.mapbox_id}?session_token=${sessionToken}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
    );
    const data = await response.json();
 

    setDestinationCord({
      latitude: data.features[0].geometry.coordinates[1],
      longitude: data.features[0].geometry.coordinates[0],
    });
  };

  return (
    <div className="mt-5">
      {/* Source Address Input */}
      <div className="relative">
        <label className="autoComplete-label">Where From?</label>
        <input
          type="text"
          className="autoComplete-input"
          onChange={(e) => {
            setSourceAddress(e.target.value);
            setActiveField("source");
          }}
          value={sourceAddress}
          onFocus={() => setActiveField("source")}
        />
        {addressLists?.suggestions && activeField === "source" ? (
          <div className="search-box z-10">
            {addressLists.suggestions?.map(
              (item: any, index: number) =>
                item?.full_address && (
                  <h2
                    key={index}
                    onClick={() => {
                      onSourceAddressClick(item);
                    }}
                    className="search-items"
                  >
                    {item.name + ", " + item.full_address}
                  </h2>
                )
            )}
          </div>
        ) : null}
      </div>

      {/* Destination Address Input */}
      <div className="relative">
        <label className="autoComplete-label">Where To?</label>
        <input
          type="text"
          className="autoComplete-input"
          value={destinationAddress}
          onChange={(e) => {
            setDestinationAddress(e.target.value);
            setActiveField("destination");
          }}
          onFocus={() => setActiveField("destination")}
        />
        {addressLists?.suggestions && activeField === "destination" ? (
          <div className="search-box">
            {addressLists.suggestions?.map(
              (item: any, index: number) =>
                item?.full_address && (
                  <h2
                    key={index}
                    onClick={() => {
                      onDestinationAddressClick(item);
                    }}
                    className="search-items"
                  >
                    {item.name + ", " + item.full_address}
                  </h2>
                )
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AutoCompleteAddress;
