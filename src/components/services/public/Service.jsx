import { getColorizedHealthTimeline, formatDateToShortMonth } from '@utils/date.formatter'
import ActiveIcon from '@components/icons/ActiveIcon'
import PendingIcon from '@components/icons/PendingIcon'
import FailedIcon from '@components/icons/FailedIcon'
import StatusBadge from '@components/StatusBadge'

const Service = ({ service }) => {
  const statusBlocks = getColorizedHealthTimeline(service.health)

  const getColor = (status) => {
    switch (status) {
    case 'green':
      return 'bg-green-500'
    case 'red':
      return 'bg-red-500'
    case 'neutral':
      return 'bg-green-200'
    default:
      return 'bg-gray-300'
    }
  }

  const getIconComponent = (status) => {
    switch (status) {
    case 'active':
      return <ActiveIcon className='w-[20px] h-[20px]' fill='green' />
    case 'waiting':
      return <PendingIcon className='w-[20px] h-[20px]' circle='#FFF3A3' path='#AD4E00' />
    case 'failed':
      return <FailedIcon className='w-[15px] h-[15px]' />
    default:
      return <ActiveIcon className='w-[20px] h-[20px]' fill='green' />
    }
  }

  return (
    <div className="p-4 rounded-lg mb-5">
      <div className="flex items-center justify-between mb-2.5">
        <div className='flex items-center gap-4'>
          <h2 className="text-lg font-semibold text-slate-700">{service.name}</h2>
          <div>
            {getIconComponent(service.status)}
          </div>
          <div className='text-slate-700'>
            <StatusBadge className='uppercase' status={service.status} />
          </div>
        </div>
        <span className="text-base text-slate-900">{service.uptime_percent}% uptime for the last 90 days</span>
      </div>
      <div className="flex flex-row gap-[6px] mt-2 mb-3">
        {statusBlocks.map((status, i) => (
          <div
            key={i}
            className={`relative group w-[6px] h-[40px] mb-1 ${getColor(status?.color)} hover:scale-y-110`}
          >
            <div
              className={`
                absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                font-medium px-2.5 py-1 bg-slate-800 text-white text-base rounded-md
                opacity-0 group-hover:opacity-100 
                transition-all duration-200 delay-100 
                whitespace-nowrap
                pointer-events-none group-hover:pointer-events-auto
              `}
            >
              <div className="flex flex-row gap-1">
                <div>
                  {formatDateToShortMonth(status.date)}
                </div>
                <div>
                  {status.down_time === true && (
                    <div className="">
                      Downtime for {status.downTimeCount} {status.downTimeCount > 1 ? 'minutes' : 'minute'}
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute left-1/2 top-full -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 rounded-sm"></div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}


export default Service
