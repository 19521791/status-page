import { data } from '@api/mock.data'
import Service from '@components/services/public/Service'

const PublicStatus = () => {
  return (
    <div className="pt-[95px]">
      <div className='px-40 mx-40'>
        <div className='flex flex-row items-center justify-center'>
          <h1 className='text-2xl md:text-4xl leading-tight font-medium mb-10 text-white'>Service Status</h1>
        </div>
        <div className='bg-white p-8 rounded-2xl mb-10 mx-10'>
          <div className='flex flex-col mb-5'>
            <div className='flex flex-row items-center justify-between'>
              <div>
                <p className='text-base md:text-lg leading-tight font-semibold mb-1.5'>{data.props.length} services are online</p>
              </div>
              <div className='flex flex-row items-center justify-center gap-8'>
                <div className='flex flex-row items-center justify-start gap-2'>
                  <div className='w-[6px] h-[6px] rounded-full bg-green-600'></div>
                  <span className='font-normal'>Uptime</span>
                </div>
                <div className='flex flex-row items-center justify-start gap-2'>
                  <div className='w-[6px] h-[6px] rounded-full bg-red-500'></div>
                  <span>Downtime</span>
                </div>
              </div>
            </div>
            <div className=''>
              <p className='text-base text-slate-700 leading-tight font-normal'>As of Apr 11, 2025</p>
            </div>
          </div>

          <div className="rounded-2xl flex flex-col items-center justify-center bg-slate-300/20">
            {data?.props?.map((service, index) => (
              <Service key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublicStatus
