import { useParams } from 'react-router-dom'
import { data } from '@api/mock.data'
import { DEFAULT_SERVICE_NAME } from '@utils/constants'
import { useState } from 'react'
import LookupIcon from '@components/icons/LookupIcon'
import { Funnel, RefreshCcw } from 'lucide-react'
import CustomTooltip from '@components/CustomTooltip'
import Footer from '@components/table/Footer'
import ServiceTableRow from '@components/table/ServiceTableRow'

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
        <div className='bg-[var(--mui-palette-background-sidebar)] p-8 rounded-2xl mb-10 overflow-x-auto'>
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
                <CustomTooltip title='Filter' placement='top'>
                  <div className='p-2 border border-slate-300 rounded-full cursor-pointer'>
                    <Funnel size={20} />
                  </div>
                </CustomTooltip>

                <CustomTooltip title='Refresh' placement='top'>
                  <div className='p-2 border border-slate-300 rounded-full cursor-pointer'>
                    <RefreshCcw size={20} />
                  </div>
                </CustomTooltip>
              </div>
            </div>
          </div>
          <div className="w-full border border-[var(--mui-palette-background-border)] rounded-xl overflow-hidden mb-3">
            <div className="grid grid-cols-7 bg-[var(--mui-palette-background-statusBlock)]
              text-[var(--mui-palette-text-serviceDetailCard)] text-sm font-medium uppercase">
              <div className="p-5 text-center rounded-tl-xl">UUID</div>
              <div className="p-5 text-center">Status</div>
              <div className="p-5 text-center">Uptime</div>
              <div className="p-5 text-center">Resp Time</div>
              <div className="p-5 text-center">Last Checked</div>
              <div className="p-5 text-center">Environment</div>
              <div className="p-5 text-center rounded-tr-xl">Date</div>
            </div>

            <div className='bg-[var(--mui-palette-background-content)]'>
              {selectedService?.health.map((timeline) => (
                <ServiceTableRow key={timeline.date} service={selectedService} timeline={timeline} />
              ))}
            </div>
          </div>

          <div className='w-full'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
