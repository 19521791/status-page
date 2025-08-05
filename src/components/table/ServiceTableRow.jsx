const ServiceTableRow = ({ service, timeline }) => {
  const serviceDetailStatus = (downtime) => downtime ? 'Downtime' : 'Uptime'

  const formatResponseTime = (time) => time || '-----'

  return (
    <div className="grid grid-cols-7 py-5 shadow-xs
      hover:shadow-md transition-shadow">
      <div className="text-center">{service.uuid}</div>
      <div className="text-center">{serviceDetailStatus(timeline.down_time)}</div>
      <div className="text-center">{service?.uptime_percent}</div>
      <div className="text-center">{formatResponseTime(service.resp_time)}</div>
      <div className="text-center">{service.last_check}</div>
      <div className="text-center">{service?.environment}</div>
      <div className="text-center">{timeline.date}</div>
    </div>
  )
}

export default ServiceTableRow
