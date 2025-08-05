import { useNavigate } from 'react-router-dom'
import DropdownManage from '@components/modal/DropdownManage'
import StatusBadge from '@components/StatusBadge'

const ServiceCard = ({ service }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/service-management/${service?.uuid}`)
  }

  return (
    <div
      className="flex lg:max-w-[295px] w-full max-w-[350px] max-h-[287px] aspect-[306/164] relative px-[4px] mb-4 cursor-pointer"
      onClick={() => handleClick()}
    >
      <div className="overflow-hidden  bg-[var(--mui-palette-background-content)] rounded-xl shadow-md p-6 w-full">
        <div
          className='flex hover:bg-[var(--mui-palette-background-hover)] w-[20px] h-[20px] mt-2 mr-3 rounded-full shadow-none absolute top-2 right-1 z-5'
          onClick={(e) => e.stopPropagation()}
        >
          <DropdownManage service={service} />
        </div>

        <div className='px-1'>
          <p className="text-lg font-semibold mb-3">
            {service.name}
          </p>

          <div className="w-full flex flex-row justify-between text-sm">
            <div className='flex flex-col justify-center gap-3 text-[var(--mui-palette-text-serviceDetailCard)]'>
              <p>Status:</p>
              <p>Last Checked:</p>
            </div>
            <div className='flex flex-col justify-center gap-3'>
              <StatusBadge
                status={service.status}
                className='p-1 rounded-[80px] font-semibold text-xs border-none flex justify-center w-[70px]'
              />
              <p>{service.last_check}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ServiceCard