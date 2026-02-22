import React from 'react'
import Image from 'next/image'

const Journey = () => {
    return (
        <div className="flex">
            <div className='p-0 m-0'>
                <Image src="/road_image.png" alt='AOSSIE journey road map image' width={700} height={500}></Image>
            </div>
            <div>Info</div>
        </div>
    )
}

export default Journey

