import BMW from '../public/bmw.jpg';
import  Civic from '../public/civic.jpeg';
import  Mustang from '../public/mustang.webp';
import Corolla from '../public/corolla.webp';
import Thaoe from '../public/thaoe.jpeg';

export const rentalCars = [
    {
      id: 1,
      name: "Toyota Corolla",
      directRental: true,
      charges: 1, 
      image: Corolla
    },
    {
      id: 2,
      name: "Honda Civic",
      directRental: false,
      charges: 1.3,
      image: Civic
    },
    {
      id: 3,
      name: "Ford Mustang",
      directRental: true,
      charges: 2,
      image: Mustang
    },
    {
      id: 4,
      name: "Chevrolet Tahoe",
      directRental: false,
      charges: 1.7,
      image: Thaoe
    },
    {
      id: 5,
      name: "BMW X5",
      directRental: true,
      charges: 2.5,
      image: BMW 
    }
  ];
  