import RegularTicket from '@/component/regular-ticket'
import React from 'react'
import { ticketDummy } from '@/component/ticketResult/ticketDataResult'

const Page: React.FC = () =>  {
  return (
    <div className=' w-full h-full text-white'>
        <div className="flex  items-center content-center gap-6 self-stretch flex-wrap">
        {ticketDummy.map((item: any, index: any) => (
          <RegularTicket
            key={index}
            image={item.image}
            name={item.ticketName}
            category={item.category}
            location={item.location}
            quantity={item.quantity}
            price={item.Amount}
            date={item.date}
            link={item.blink}
          />
        ))}
      </div>
    </div>
  )
}

export default Page