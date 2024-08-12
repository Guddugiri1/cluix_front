import React from 'react'
import {Spin} from 'antd'

const LoaderComponets = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <Spin size="large" />
    </div>
  )
}

export default LoaderComponets