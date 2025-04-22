import MenuIcon from '@components/icons/MenuIcon'
import BellIcon from '@components/icons/BellIcon'
import ModeToggle from '@components/ModeToggle'
import { useColorScheme } from '@mui/material'
import DropdownMenu from '@components/modal/DropdownMenu'
import LogoIcon from '@components/icons/LogoIcon'

const Header = () => {
  const { mode } = useColorScheme()

  const filledMenuIcon = () => {
    return mode === 'dark' ? 'img-menu-dark-mode' : ''
  }

  return (
    <header
      className='fixed top-0 left-0 right-0 p-2 flex items-center justify-between shadow z-10'
      style={{
        backgroundColor: 'var(--mui-palette-background-header)'
      }}
    >
      <div className="flex items-center justify-center gap-9 px-4.5">
        <MenuIcon className={`w-[20px] h-[20px] ${() => filledMenuIcon()}`}/>
        <LogoIcon className='xl:hidden w-[28px] h-[28px] flex items-center' />
        <h1 className="hidden xl:block text-lg font-semibold">Service Health</h1>
      </div>

      <div className="flex items-center gap-4 px-1.5">
        <div className='flex items-center gap-4 sm:gap-6'>
          <ModeToggle />
          <BellIcon hasNotification={true} />
        </div>

        <div
          className="flex items-center gap-2 px-2 py-1.5 rounded-3xl
               hover:bg-[var(--mui-palette-background-hover)]
               transition-colors cursor-pointer"
        >
          <DropdownMenu />
        </div>
      </div>

    </header>
  )
}


export default Header
