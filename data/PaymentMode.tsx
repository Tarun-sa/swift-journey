
import Visa from '../public/visa.png';
import MasterCard from '../public/Mastercard.webp';
import UPI from '../public/upi.jpg';
import GooglePay from '../public/googlepay.jpg'
import Dollar from '../public/dollar.jpg'

export const paymentMethods = [
    {
      id: 1,
      name: "Visa",
      type: "creditCard",
      image: Visa
    },
    {
      id: 2,
      name: "MasterCard",
      type: "creditCard",
      image: MasterCard
    },

    {
      id: 3,
      name: "UPI",
      type: "digitalWallet",
      image: UPI
    },
    {
      id: 4,
      name: "Google Pay",
      type: "digitalWallet",
      image: GooglePay
    },
    {
      id: 5,
      name: "Cash",
      type: "wallet",
      image: Dollar
    },
  ];
  