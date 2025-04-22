import { useParams } from 'react-router-dom'
import { data } from '@api/mock.data'
import { DEFAULT_SERVICE_NAME } from '@utils/constants'

const ServiceDetail = () => {
  const { uuid } = useParams()

  const selectedService = data.props.find((s) => s.uuid === uuid)
  console.log('🚀 ~ ServiceDetail ~ selectedService:', selectedService)

  return (
    <div className="pt-[95px]">
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8'>
        <div className='w-full'>
          <h1 className='text-2xl md:text-[28px] leading-tight font-medium mb-10'>
            {selectedService?.name || DEFAULT_SERVICE_NAME}
          </h1>

          {/* <div className='flex flex-row items-center justify-end mb-10'>
            <div className='w-[120px] p-3 rounded-3xl cursor-pointer text-white bg-[#8C8C73] flex items-center justify-center gap-0.5'>
              <span>Add Service</span>
            </div>
          </div> */}
        </div>
        {/* <div className='bg-white p-8 rounded-2xl mb-10 overflow-x-auto'>
          <div className="mb-20">
            <p className="text-base md:text-lg font-semibold leading-tight">Service history</p>
          </div>
          <ServiceTable services={services} />
        </div> */}
      </div>
    </div>
  )
}

export default ServiceDetail