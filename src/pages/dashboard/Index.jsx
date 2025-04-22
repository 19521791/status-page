import { useState } from 'react'
import { data } from '@api/mock.data'
import ShareIcon from '@components/icons/ShareIcon'
import EmptyDashboard from './EmptyDashboard'
import ServiceDashboard from './ServiceDashboard'

const Index = () => {
  const [services, setServices] = useState(data.props)
  const isEmptyService = services.length === 0

  const handleDelete = (uuid) => {
    setServices(prev => prev.filter(service => service.uuid !== uuid))
  }

  return (
    <div className="pt-[90px]">
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8'>
        <div className='flex flex-col items-start md:flex-row md:items-center md:justify-between'>
          <h1 className='text-2xl md:text-[28px] leading-tight font-medium mb-5 md:mb-10'>Service Status</h1>

          <div className='flex items-center justify-center mb-8 md:mb-10 gap-3'>
            <div
              className='font-medium w-[140px] p-3 rounded-3xl cursor-pointer flex items-center justify-center'
              style={{
                backgroundColor: 'var(--mui-palette-background-addServiceBtn)',
                color: 'var(--mui-palette-text-addServiceBtn)'
              }}
            >
              <span>Add service</span>
            </div>

            <a
              href='/status/douglus-services'
              rel='noopener noreferrer'
              target='_blank'
            >
              <div
                className='flex flex-row items-center justify-end'
              >
                <div
                  className='font-medium w-[110px] p-3 rounded-3xl cursor-pointer text-white bg-[#8C8C73] flex items-center justify-center gap-0.5'
                >
                  <ShareIcon className='w-[25px] h-[25px]' strokeColor='#fff' />
                  <span>Share</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div
          className='px-4 py-5 md:p-8 rounded-2xl mb-10 md:mx-8'
          style={{
            backgroundColor: 'var(--mui-palette-background-content)'
          }}
        >
          {isEmptyService
            ? <EmptyDashboard user={{ 'name': 'Douglus' }} />
            : <ServiceDashboard data={data} handleDelete={handleDelete} />
          }
        </div>
      </div>
    </div>
  )
}

export default Index
