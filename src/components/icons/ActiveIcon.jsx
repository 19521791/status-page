const ActiveIcon = ({ className, fill }) => {
  return (
    <div>
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-2.707a1 1 0 0 1 0 1.414l-3.683 3.683a1.449 1.449 0 0 1-2.048 0l-1.683-1.683a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0Z"
        />
      </svg>
    </div>
  )
}

export default ActiveIcon