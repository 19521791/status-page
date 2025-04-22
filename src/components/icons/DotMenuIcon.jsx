import DotIcon from '@assets/dot-menu.svg?react'

const DotMenuIcon = ({ className, fill }) => {
  return (
    <div
      className={className}
    >
      <DotIcon className='w-full h-full' fill={fill} />
    </div>
  )
}

export default DotMenuIcon