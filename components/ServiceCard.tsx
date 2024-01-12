import React, { FunctionComponent } from 'react'
import { Services } from '../type'

const ServiceCard: FunctionComponent<{ service: Services }> = ({service:{Icon,title,about}}) => {
return (
    <div className='bg-gray-200 rounded-lg lg:col-span-1'>
        <div className='flex items-center p-2 space-x-4'>
            <Icon className='w-12 h-12 text-green-400'></Icon>
        <div className='w-full hover:scale-90  duration-100'>
            <h4 className='font-bold'>{title }</h4>
            <p>{about}</p>
        </div>
        </div>
        
</div>
)
}

export default ServiceCard