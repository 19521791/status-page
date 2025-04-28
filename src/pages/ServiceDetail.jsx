import { useParams } from 'react-router-dom'
import { data } from '@api/mock.data'
import { DEFAULT_SERVICE_NAME } from '@utils/constants'
import ServiceTable from '@/components/table/ServiceTable'
import { useState } from 'react'
import LookupIcon from '@components/icons/LookupIcon'
import { Funnel, RefreshCcw } from 'lucide-react'

const ServiceDetail = () => {
  const { uuid } = useParams()
  const [input, setInput] = useState()

  const selectedService = data.props.find((s) => s.uuid === uuid)

  return (
    <div className="pt-[95px] pb-4">
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8'>
        <div className='w-full'>
          <h1 className='text-2xl md:text-[28px] leading-tight font-medium mb-10'>
            {selectedService?.name || DEFAULT_SERVICE_NAME}
          </h1>
        </div>
        <div className='bg-white p-8 rounded-2xl mb-10 overflow-x-auto'>
          <div className="mb-5 flex flex-row items-center justify-between">
            <p className="text-base md:text-lg font-semibold leading-tight">Service history</p>

            <div className='flex flex-row items-center justify-center gap-2'>
              <div className='relative w-full max-w-sm'>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type='text'
                  placeholder='Search by UUID, Response Time, Environment'
                  className="bg-white w-[300px] pl-12 pr-6 py-3 rounded-full border border-gray-300
                    focus:outline-none focus:border-blue-500
                    text-base placeholder-gray-400 transition-all text-[#334155] placeholder:text-sm
                    overflow-hidden text-ellipsis whitespace-nowrap"
                />

                <div className="absolute left-6 top-[50%] transform -translate-y-1/2 text-slate-700 pointer-events-none">
                  <LookupIcon className='w-4.5 h-4.5' />
                </div>
              </div>

              <div className='flex flex-row items-center justify-center gap-2'>
                <div className='p-2 border border-slate-300 rounded-full'>
                  <Funnel size={20} />
                </div>

                <div className='p-2 border border-slate-300 rounded-full'>
                  <RefreshCcw size={20} />
                </div>
              </div>
            </div>
          </div>
          <ServiceTable service={selectedService} />

          <div>
            <div className='text-sm leading-tight font-medium'>Rows per page</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail