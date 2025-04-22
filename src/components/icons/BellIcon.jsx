import { Bell } from 'lucide-react'

const BellIcon = ({ hasNotification }) => {
  return (
    <div
      className={`
        relative w-[30px] h-[30px] cursor-pointer flex items-center
        ${hasNotification ? 'after:content-[""] after:absolute after:top-0 after:right-0 after:w-[7px] after:h-[7px] after:bg-red-500 after:rounded-full' : ''}
      `}
    >
      <Bell size={20} strokeWidth={1.5} />
    </div>
  )
}

export default BellIcon
