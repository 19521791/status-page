import { KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowDown } from '@mui/icons-material'
import ArrowDown from '@components/icons/ArrowDown'
import { useRef, useState } from 'react'

const Footer = ({
  rowsPerPageOptions = [5, 10, 25],
  count = 15,
  rowsPerPage = 20,
  page = 0,
  onPageChange,
  onRowsPerPageChange
}) => {
  const totalPages = Math.ceil(count / rowsPerPage)
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef()

  return (
    <div className="flex justify-between items-center py-4">
      {/* Left side */}
      <div className="flex items-center gap-2">
        <label htmlFor="rowsPerPage" className="text-base font-medium leading-tight">
    Rows per page
        </label>
        <div
          ref={dropdownRef}
          className="relative"
          onClick={() => setOpen(!open)}
        >
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
            className="appearance-none border border-gray-300 rounded-2xl px-10 py-0.5 pr-8 text-base
             focus:outline-none focus:border-blue-600 cursor-pointer bg-white text-slate-700"
          >
            {rowsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            <ArrowDown className='w-3 h-3' />
          </div>
        </div>
      </div>


      {/* Right side */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 0}
          className="p-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <KeyboardArrowLeft />
        </button>

        <span className="text-sm">
          Trang {page + 1} / {totalPages}
        </span>

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages - 1}
          className="p-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <KeyboardArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Footer
