import dayjs from 'dayjs'

export const generate90Days = () => {
  return Array.from({ length: 90 }, (_, i) =>
    dayjs().subtract(89 - i, 'day').format('DD-MM-YYYY')
  )
}

export const getColorizedHealthTimeline = (healthLogs) => {
  const ninetyDays = generate90Days()

  const healthMap = {}
  healthLogs.forEach((h) => {
    healthMap[h.date] = h
  })

  return ninetyDays.map((date) => {
    const log = healthMap[date]

    if (log) {
      return {
        ...log,
        color: log.down_time === true ? 'red' : 'green'
      }
    }

    return {
      date,
      downTimeCount: 0,
      down_time: null,
      color: 'neutral'
    }
  })
}

export const formatDateToShortMonth = (dateString) => {
  if (!dateString || !/[-\\/]/.test(dateString)) {
    return 'Invalid date'
  }

  const separator = dateString.includes('-') ? '-' : '/'
  const [day, month, year] = dateString.split(separator)
  const date = new Date(`${year}-${month}-${day}`)

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  })
}

export const getToday = () => {
  const today = new Date()
  const formattedDate = today.toLocaleDateString('vi-VN')
  return formattedDate
}
