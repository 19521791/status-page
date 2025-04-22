import ServiceTableRow from './ServiceTableRow'

const ServiceTable = ({ services }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-separate border-spacing-y-4">
        <thead>
          <tr className="text-gray-500 text-xs uppercase bg-slate-300/20">
            <th className="p-4 rounded-tl-xl text-center">Service</th>
            <th className="p-4 text-center">Status</th>
            <th className="p-4 text-center">Response Time</th>
            <th className="p-4 text-center">Last Checked</th>
            <th className="p-4 rounded-tr-xl text-center">Date</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <ServiceTableRow key={service.uuid} service={service} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ServiceTable