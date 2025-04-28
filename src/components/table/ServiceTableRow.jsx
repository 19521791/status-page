import StatusBadge from '@components/StatusBadge'

const ServiceTableRow = ({ service, timeline }) => {
  const handleStatus = (downtime) => {
    if (downtime) {
      return 'Downtime'
    } else {
      return 'Uptime'
    }
  }

  const handleRespTime = (time) => time || '-----'

  return (
    <tr className="text-base">
      <td className="px-4 py-3 text-center font-medium">{service.uuid}</td>
      <td className="px-4 py-3 text-center">
        {handleStatus(timeline.down_time)}
      </td>
      <td className='px-4 py-3 text-center'>{service?.uptime_percent}</td>
      <td className="px-4 py-3 text-center">{handleRespTime(service.resp_time)}</td>
      <td className="px-4 py-3 text-center">{service.last_check}</td>
      <td className='px-4 py-3 text-center'>{service?.environment}</td>
      <td className="px-4 py-3 text-center">{timeline.date}</td>
    </tr>
  )
}

export default ServiceTableRow