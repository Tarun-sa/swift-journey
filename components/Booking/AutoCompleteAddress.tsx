import React, { useEffect, useState } from "react";

const AutoCompleteAddress = () => {
  const [sourceAddress, setSourceAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [addressLists, setAddressLists] = useState<any>([]);
  const [activeField, setActiveField] = useState<
    "source" | "destination" | null
  >(null);

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
    console.log(data, "data");
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
                      setSourceAddress(item.name+", "+item.full_address);
                      setAddressLists([]);
                      setActiveField(null);
                    }}
                    className="search-items"
                  >
                    {item.name+", "+item.full_address}
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
                      setDestinationAddress(item.name+", "+item.full_address);
                      setAddressLists([]);
                      setActiveField(null);
                    }}
                    className="search-items"
                  >
                   {item.name+", "+item.full_address}
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
