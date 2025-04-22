import StatusBadge from '@components/StatusBadge'

const ServiceTableRow = ({ service }) => {
  return (
    <tr className="text-sm">
      <td className="px-4 py-3 text-center font-medium">{service.name}</td>
      <td className="px-4 py-3 text-center">
        <StatusBadge status={service.status} />
      </td>
      <td className="px-4 py-3 text-center">{service.responseTime}</td>
      <td className="px-4 py-3 text-center">{service.lastChecked}</td>
      <td className="px-4 py-3 text-center">{service.date}</td>
    </tr>
  )
}

export default ServiceTableRow