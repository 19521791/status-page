import { formatDateToShortMonth, getColorizedHealthTimeline } from '@utils/date.formatter'
import { getStatusColor } from '@utils/status.helper'

const StatusTimeline = ({ service }) => {
  const statusTimeline = getColorizedHealthTimeline(service.health)

  return (
    <div className="flex flex-row gap-[6px] mt-2 mb-3 flex-wrap xl:flex-nowrap">
      {statusTimeline.map((status, i) => (
        <div
          key={i}
          className={`relative group w-[6px] h-[40px] mb-1 ${getStatusColor(status?.color)} hover:scale-y-110`}
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
  )
}

export default StatusTimeline