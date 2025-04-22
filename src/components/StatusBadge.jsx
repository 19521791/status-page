import { getStatusLabel } from '@utils/status.helper'

const STATUS_STYLES = {
  active: 'bg-[#D5F5E3] text-[#1C7C54]',
  failed: 'bg-[#FFB9AE] text-[#881410]',
  waiting: 'bg-[#FFF3A3] text-[#AD4E00]',
  done: 'bg-[#CED3DB] text-[#1C1C1E]'
}

const StatusBadge = ({ className, status }) => {
  const classes = STATUS_STYLES[status] || 'bg-gray-200 text-gray-600'

  return (
    <span className={`${classes} ${className}`}>
      {getStatusLabel(status)}
    </span>
  )
}

export default StatusBadge