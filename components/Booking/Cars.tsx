import React, { useState } from "react";
import { rentalCars } from "../../data/CarList";
import Image, { StaticImageData } from "next/image";

interface RentalCar {
  id: number;
  name: string;
  directRental: boolean;
  charges: number;
  image: StaticImageData;
}

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  return (
    <div className="mt-3">
      <h2 className="font-medium text-gray-800">Select Cars</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 overflow-auto mt-1">
        {rentalCars?.map((car: RentalCar) => {
          return (
            <div
              key={car.id}
              className={`cars-list-wrapper hover:scale-90 transition-all ${
                selectedCar === car.id ? " border-lime-500 border-[2px]" : null
              }`}
              onClick={()=>setSelectedCar(car.id)}
            >
              <Image src={car.image} alt={car.name} width={95} height={60} />
              <div className="flex mt-2 justify-between">
                <h2 className="text-[14px] text-gray-400">{car.name}</h2>
                <span className="text-[12px] text-zinc-900"><span className="font-medium text-[13px]">$</span> {car.charges}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cars;
