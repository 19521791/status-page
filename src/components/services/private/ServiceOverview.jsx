import { useNavigate } from 'react-router-dom'
import { useColorScheme } from '@mui/material'
import CustomTooltip from '@components/CustomTooltip'
import StatusBadge from '@components/StatusBadge'
import ActiveIcon from '@components/icons/ActiveIcon'
import PendingIcon from '@components/icons/PendingIcon'
import FailedIcon from '@components/icons/FailedIcon'

const ServiceOverview = ({ service }) => {
  const navigate = useNavigate()
  const { mode } = useColorScheme()

  const getStatusIcon = (status, mode) => {
    const isDark = mode === 'dark'

    const iconColor = {
      active: isDark ? '#90EE90' : 'green',
      waiting: {
        circle:'#FFF3A3',
        path:'#AD4E00'
      },
      failed: '#F44336',
      default: isDark ? '#90EE90' : 'green'
    }

    switch (status) {
    case 'active':
      return <ActiveIcon className="w-[20px] h-[20px]" fill={iconColor.active} />
    case 'waiting':
      return (
        <PendingIcon
          className="w-[20px] h-[20px]"
          circle={iconColor.waiting.circle}
          path={iconColor.waiting.path}
        />
      )
    case 'failed':
      return <FailedIcon className="w-[15px] h-[15px]" fill={iconColor.failed} />
    default:
      return <ActiveIcon className="w-[20px] h-[20px]" fill={iconColor.default} />
    }
  }

  const getIconComponent = (status) => {
    return getStatusIcon(status, mode) || getStatusIcon.default
  }

  const getRespTime = (time) => time || '--'

  const handleClick = () => {
    navigate(`/service-management/${service?.uuid}`)
  }

  return (
    <div className='flex items-center gap-4'>
      <div
        className='flex flex-row items-center justify-center gap-2'
        onClick={() => handleClick()}
      >
        <CustomTooltip className='cursor-pointer' title='Click for details' placement='top'>
          <h2 className="text-lg font-semibold cursor-pointer">{service.name}</h2>
        </CustomTooltip>
        {getIconComponent(service.status)}
        <StatusBadge className='p-2 rounded-[80px] font-semibold text-xs border-none me-0' status={service.status} />
      </div>
      <p className='text-base hidden xl:block'>last checked {service.last_check}</p>
      <p className='text-base hidden xl:block'>resp time {getRespTime(service.resp_time)}</p>
      <p className="text-base hidden lg:block">{service.uptime_percent}% uptime for the last 90 days</p>
    </div>
  )
}

export default ServiceOverview