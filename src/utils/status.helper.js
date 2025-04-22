export const getStatusColor = (status) => {
  const colorMap = {
    green: 'bg-green-500',
    red: 'bg-red-500',
    neutral: 'bg-green-200',
    default: 'bg-gray-300'
  }
  return colorMap[status] || colorMap.default
}

export const getStatusLabel = (status) => {
  const labelMap = {
    active: 'Active',
    waiting: 'Waiting',
    failed: 'Failed',
    default: 'Active'
  }
  return labelMap[status] || labelMap.default
}