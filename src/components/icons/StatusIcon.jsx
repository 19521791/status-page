const StatusIcon = ({ className, fill }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className={className}
        fill={fill}
      >
        <path d="M24 30a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Zm0-10a4 4 0 1 0 4 4 4.005 4.005 0 0 0-4-4ZM12 15.59 9.41 13 8 14.41l4 4 7-7L17.59 10 12 15.59z" />
        <path d="M14 24a10 10 0 1 1 10-10h2a12 12 0 1 0-12 12Z" />
        <path d="M0 0h32v32H0z" fill="none" />
      </svg>
    </div>
  )
}

export default StatusIcon
