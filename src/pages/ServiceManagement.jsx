import { useState } from 'react'
import { data } from '@api/mock.data'
import LookupIcon from '@components/icons/LookupIcon'
import ServiceCard from '@components/services/private/ServiceCard'

const ServiceManagement = () => {
  const [input, setInput] = useState('')
  // const [touched, setTouched] = useState(false)


  return (
    <div className="pt-[95px]">
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8'>
        <div className='flex flex-row items-center justify-between w-full'>
          <h1 className='text-2xl md:text-[28px] leading-tight font-semibold'>Service Management</h1>

          <div className='relative w-full max-w-sm'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              // onBlur={() => setTouched(true)}
              // onFocus={() => setTouched(true)}
              type='text'
              placeholder='Search service'
              className="bg-white w-full pl-12 pr-6 py-3 rounded-full border border-gray-300
                        focus:outline-none focus:border-blue-500
                        text-base placeholder-gray-400 transition-all text-[#334155]"
            />

            <div className="absolute left-6 top-[50%] transform -translate-y-1/2 text-slate-700 pointer-events-none">
              <LookupIcon className='w-4.5 h-4.5' />
            </div>
          </div>
        </div>

        <div className='flex flex-col md:py-9 py-6 items-center'>
          <div className='w-full'>
            <div className='flex flex-wrap justify-start items-center gap-3'>
              { data?.props?.map((service) => (
                <ServiceCard key={service.uuid} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceManagement
