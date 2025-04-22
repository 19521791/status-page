import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DotMenuIcon from '@icons/DotMenuIcon'
import ConfirmDelete from './ConfirmDelete'
import { useColorScheme } from '@mui/material'
import { Pencil, Trash } from 'lucide-react'

const DropdownManage = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isOpen, setIsOpen]= useState(false)
  const menuRef = useRef()

  const navigate = useNavigate()
  const { mode } = useColorScheme()

  const filledDotIcon = () => (mode === 'dark' ? '#fff' : '#000')

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev)
  }

  const handleDetailClick = () => {
    setIsOpen(false)
    navigate(`/service-management/${service?.uuid}`)
  }

  const handleDeleteClick = () => {
    setIsModalOpen(true)
    setIsOpen(false)
  }

  const handleConfirm = () => {
    setIsModalOpen(false)
  }

  const handleModalClose = () => setIsModalOpen(false)

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={menuRef} className="relative inline-block text-left cursor-pointer mr-4">
      <button onClick={handleMenuToggle} className='cursor-pointer'>
        <DotMenuIcon className="w-[20px] h-[20px]" fill={filledDotIcon()} />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-32 origin-top-right
            rounded-xl bg-white ring-1 ring-black/5 z-10 
            shadow-[0_2px_6px_rgba(100,116,139,0.25),0_-1px_3px_rgba(100,116,139,0.08),-1px_0_3px_rgba(100,116,139,0.08),1px_0_3px_rgba(100,116,139,0.08)]"
        >
          <div className="py-3 px-2.5 text-sm text-gray-800 flex flex-col font-medium">
            <button
              className="px-4 py-2.5 hover:bg-gray-100 text-left cursor-pointer flex items-center gap-3"
              onClick={handleDetailClick}
            >
              <Pencil size={17} />
              <span>Edit</span>
            </button>
            <button
              className="px-4 py-2.5 hover:bg-gray-100 text-left cursor-pointer flex items-center gap-3"
              onClick={handleDeleteClick}
            >
              <Trash size={17} />
              <span>Delete</span>
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <ConfirmDelete
          open={isModalOpen}
          handleClose={handleModalClose}
          onConfirm={handleConfirm}
          serviceName={service.name}
        />
      )}
    </div>
  )
}

export default DropdownManage
