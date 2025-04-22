import ServiceOverview from './ServiceOverview'
import DropdownDetail from '@components/modal/DropdownDetail'
import StatusTimeline from './StatusTimeline'

const Service = ({ service, onDelete }) => {
  return (
    <div className='p-4 rounded-lg md:mb-5 mx-1 md:mx-2'>
      <div className='flex items-center justify-between mb-2.5 w-full'>
        <ServiceOverview service={service} />

        <DropdownDetail onDelete={onDelete} service={service} />
      </div>

      <StatusTimeline service={service} />
    </div>
  )
}

export default Service