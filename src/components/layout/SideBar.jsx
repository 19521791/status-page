import { useNavigate, useLocation } from 'react-router-dom'
import StatusIcon from '@components/icons/StatusIcon'
import ManagementIcon from '@components/icons/ManagementIcon'
import CustomTooltip from '@components/CustomTooltip'
import { useColorScheme } from '@mui/material'

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { mode } = useColorScheme()

  const isStatusTab = location.pathname.startsWith('/service-status')
  const isManagementTab = location.pathname.startsWith('/service-management')

  const filledStatusIcon = () => (mode === 'dark' || isStatusTab ? '#fff' : '')

  return (
    <aside
      className="hidden xl:block mt-[54px] h-screen w-[72px] shadow-lg"
      style={{ backgroundColor: 'var(--mui-palette-background-sidebar)' }}
    >
      <div className='flex flex-col items-center mt-10.5 gap-7'>

        <CustomTooltip title='Service Status' placement='left'>
          <div
            className={`flex items-center justify-center ${
              isStatusTab
                ? 'w-12 h-10 rounded-full bg-black'
                : 'w-10 h-10 rounded-3xl hover:bg-[var(--mui-palette-background-hover)]'
            } cursor-pointer`}
            onClick={() => navigate('/service-status')}
          >
            <StatusIcon className="w-[25px] h-[25px]" fill={filledStatusIcon()} />
          </div>
        </CustomTooltip>

        <CustomTooltip title='Service Management' placement='left'>
          <div
            className={`flex items-center justify-center ${
              isManagementTab
                ? 'w-12 h-10 rounded-full bg-black'
                : 'w-10 h-10 rounded-3xl hover:bg-[var(--mui-palette-background-hover)]'
            } cursor-pointer`}
            onClick={() => navigate('/service-management')}
          >
            <ManagementIcon className={`w-[20px] h-[20px] ${isManagementTab ? 'text-white' : ''}`} />
          </div>
        </CustomTooltip>
      </div>
    </aside>
  )
}

export default Sidebar


