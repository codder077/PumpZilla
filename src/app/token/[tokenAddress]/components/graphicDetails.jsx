import Image from 'next/image'
import React from 'react'
import TopHeading from './TopHeading'

const GraphicDetails = () => {
  return (
    <div className="detailDiv lg890md:rounded-3xl rounded-2xl bg-darkPry p-4 relative z-0 overflow-hidden sm:h-[80dvh] h-[50vh]">
      <TopHeading text={'GRAPHICAL VIEW'}/>
    <Image src={'/city.png'} alt="city" width={400} height={200} className="bgImgPart pointer-events-none max-w-none left-0 top-0 absolute z-0 object-cover object-top mix-blend-color-dodge"/>

</div>
  )
}

export default GraphicDetails
