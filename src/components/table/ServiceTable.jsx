import ServiceTableRow from './ServiceTableRow'

const ServiceTable = ({ service }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-separate border-spacing-y-4">
        <thead>
          <tr className="text-gray-500 text-xs uppercase bg-slate-300/20">
            <th className='rounded-tl-xl text-center'>UUID</th>
            <th className="text-center">Status</th>
            <th className='p-4 text-center'>Uptime</th>
            <th className="p-4 text-center">Resp Time</th>
            <th className="p-4 text-center">Last Checked</th>
            <th className='p-4 text-center'>Environment</th>
            <th className="p-4 rounded-tr-xl text-center">Date</th>
          </tr>
        </thead>
        <tbody>
          {service?.health.map((timeline) => (
            <ServiceTableRow key={timeline.date} service={service} timeline={timeline} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ServiceTable