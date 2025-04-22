const ArrowDown = ({ className, fill }) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className='w-full h-full'
        fill={fill}
      >
        <path
          d="M110.5 149.5c96.667-.167 193.334 0 290 .5 14.929 4.67 21.096 14.837 18.5 30.5-1.223 4.115-3.223 7.782-6 11a15535.217 15535.217 0 0 0-137 160c-13.667 13.333-27.333 13.333-41 0l-140-164c-7.725-18.19-2.558-30.857 15.5-38Z"
          style={{ opacity: 0.988 }}
        />
      </svg>
    </div>
  )
}

export default ArrowDown