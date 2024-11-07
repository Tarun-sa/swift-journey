import { paymentMethods } from '@/data/PaymentMode';
import React, { useState } from 'react'
import Image, { StaticImageData } from "next/image";

interface PaymentMode {
    id: number;
    name: string;
    type:string;
    image: StaticImageData;
  }

const Payment = () => {
    const [selectedCar, setSelectedCar] = useState<number | null>(null);
  return (
    <div className='m-2'>
        <h2 className='font-medium text-gray-800 mb-2'>Payment Methods
        <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 overflow-auto mt-2">
        {paymentMethods?.map((item: PaymentMode) => {
          return (
            <div
              key={item.id}
              className={`cars-list-wrapper hover:scale-110 transition-all h-14 ${
                selectedCar === item.id ? " border-lime-500 border-[2px]" : null
              }`}
              onClick={()=>setSelectedCar(item.id)}
            >
              <Image src={item.image} alt={item.name}  className='w-[90%] h-full'/>
             
            </div>
          );
        })}
      </div>
        </h2>
    </div>
  )
}

export default Payment