import Booking from '@/components/Booking'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
       <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className=''>
        <Booking />
        </div>
         <div className='col-span-2 bg-emerald-600 order-first md:order-last'>Maps</div>
       </div>
    </div>
 
  )
}