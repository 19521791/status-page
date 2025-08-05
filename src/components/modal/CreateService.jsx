import { useState } from 'react'
import { Backdrop, Box, Modal, Fade } from '@mui/material'
import ExitIcon from '@components/icons/ExitIcon'
import WarningDeleteIcon from '@components/icons/WarningDeleteIcon'
import TinyExitIcon from '@components/icons/TinyExitIcon'

const CreateService = ({ open, handleClose }) => {
  const [input, setInput] = useState()

  const handleCloseModal = () => {
    setInput('')
    handleClose()
  }

  const handleClear = () => setInput('')

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 300 } }}
    >
      <Fade in={open}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 3,
          borderRadius: 4
        }}>
          <div className='modal-container text-slate-700'>
            <div className='header-container flex flex-row items-center justify-end mb-10'>
              <div
                className='hover:bg-cyan-50 cursor-pointer p-1 rounded-full'
                onClick={() => handleClose()}
              >
                <ExitIcon />
              </div>
            </div>
            <div className='body-container'>
              <div className='icon-container flex flex-row items-center justify-center mb-10'>
                <div className='img w-[70px] h-[70px] bg-[#FFB9AE] flex flex-row items-center justify-center rounded-full opacity-80'>
                  <WarningDeleteIcon />
                </div>
              </div>

              <form>
                <div className='relative mb-2'>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Enter service name to delete'
                    className={`
                      w-full pr-10 pl-6 py-4 rounded-3xl
                      text-sm text-gray-800
                      placeholder:text-gray-400
                      border-1
                      focus:border-blue-600
                      focus:outline-none transition mb-2
                    `}
                  />

                  {input && (
                    <button
                      onClick={handleClear}
                      className='absolute right-5 top-1/3 transform -translate-y-1/2 cursor-pointer'
                    >
                      <TinyExitIcon />
                    </button>
                  )}

                </div>

                <div className='flex justify-center gap-4 mt-10 mb-4'>
                  <button
                    onClick={handleCloseModal}
                    className='font-medium w-[140px] p-3 rounded-3xl cursor-pointer border border-gray-400 flex items-center justify-center hover:bg-cyan-50'
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    // onClick={handleSubmit}
                    className={`font-medium w-[300px] p-3 rounded-3xl text-white bg-[#000] flex items-center justify-center
                      hover:opacity-80 cursor-pointer`}
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}

export default CreateService
