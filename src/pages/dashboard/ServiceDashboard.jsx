import Service from '@components/services/private/Service'
import { getToday, formatDateToShortMonth } from '@utils/date.formatter'

const ServiceDashboard = ({ data, handleDelete }) => {
  const today = getToday()
  const formattedToday = formatDateToShortMonth(today)

  return (
    <>
      <div className='flex flex-col mb-3 md:mb-5'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex flex-col gap-1 sm:gap-0.5'>
            <p className='text-base md:text-lg leading-tight font-semibold md:mb-1.5'>{data.props.length} services are online</p>
            <p className='text-base leading-tight font-normal'>As of {formattedToday}</p>
          </div>
          <div className='flex flex-col md:flex-row md:items-center md:justify-center gap-0.5 md:gap-8'>
            <div className='flex items-center justify-start gap-2'>
              <div className='w-[6px] h-[6px] rounded-full bg-green-600'></div>
              <span className='font-normal'>Uptime</span>
            </div>
            <div className='flex items-center justify-start gap-2'>
              <div className='w-[6px] h-[6px] rounded-full bg-red-500'></div>
              <span>Downtime</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="rounded-2xl md:mx-4"
        style={{ backgroundColor: 'var(--mui-palette-background-statusBlock)' }}
      >
        {data?.props?.map((service) => (
          <Service key={service.uuid} service={service} onDelete={handleDelete} />
        ))}
      </div>
    </>
  )
}

export default ServiceDashboard