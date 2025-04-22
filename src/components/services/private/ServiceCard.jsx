import { useNavigate } from 'react-router-dom'
import DropdownManage from '@components/modal/DropdownManage'
import StatusBadge from '@components/StatusBadge'

const ServiceCard = ({ service }) => {
  console.log('🚀 ~ ServiceCard ~ service:', service)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/service-management/${service?.uuid}`)
  }

  return (
    <div
      className="flex lg:max-w-[295px] w-full max-w-[350px] aspect-[306/164] relative px-[4px] mb-4 cursor-pointer"
      onClick={() => handleClick()}
    >
      <div className="relative overflow-hidden  bg-[var(--mui-palette-background-content)] rounded-xl shadow-md p-6 w-full max-w-md">
        <div className='flex gap-2 items-center rounded-full shadow-none justify-center py-4 absolute top-2 right-1 z-5 w-6 h-6'>
          <DropdownManage />
        </div>

        <div className='px-1'>
          <p className="text-lg font-semibold mb-3">
            {service.name}
          </p>

          <div className="w-full flex flex-row justify-between text-sm">
            <div className='flex flex-col justify-center gap-3'>
              <p className='py-2'>Status:</p>
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