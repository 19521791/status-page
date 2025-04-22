const ShareIcon = ({ className, strokeColor }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -0.5 25 25"
        fill="none"
        className={className}
      >
        <path
          d="m14.734 15.897 4.486-3.76a.762.762 0 0 0 0-1.18l-4.486-3.76a.823.823 0 0 0-1.357.59V9.27C7.079 8.18 5.5 13.815 5.5 16.997c1.461-2.424 5.247-6.818 7.877-3.182v1.487a.823.823 0 0 0 1.357.595Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}

export default ShareIcon