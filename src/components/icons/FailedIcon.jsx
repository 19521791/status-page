const FailedIcon = ({ className }) => {
  return (
    <div>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 512 512"
      >
        <ellipse
          cx="256"
          cy="256"
          rx="256"
          ry="255.832"
          style={{ fill: '#FFB9AE' }}
        />
        <path
          d="M228.021 113.143h55.991v285.669h-55.991z"
          style={{ fill: '#881410' }}
          transform="rotate(-45.001 256.015 255.982)"
        />
        <path
          d="M113.164 227.968h285.669v55.991H113.164z"
          style={{ fill: '#881410' }}
          transform="rotate(-45.001 255.997 255.968)"
        />
      </svg>
    </div>
  )
}

export default FailedIcon
