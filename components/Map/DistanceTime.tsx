import { DirectionDataContext } from "@/context/DirectionDataContext";
import React, { useContext } from "react";

const DistanceTime = () => {
  const { directionData, setDirectionData } = useContext(DirectionDataContext);
  return (
    <div className="flex bg-sky-300 p-3 rounded-md">
      <h2 className="text-white opacity-80 text-[16px]">
        Distance:{" "}
        <span className=" font-medium text-black mr-3">
          {(directionData?.routes[0]?.distance / 1000).toFixed(2)} KM
        </span>
      </h2>
      <h2 className="text-lime-100 opacity-80 text-[16px]" >
        Duration:{" "}
        <span className=" font-medium text-black">
          {(directionData?.routes[0]?.duration / 60).toFixed(2)} Min
        </span>
      </h2>
    </div>
  );
};

export default DistanceTime;
