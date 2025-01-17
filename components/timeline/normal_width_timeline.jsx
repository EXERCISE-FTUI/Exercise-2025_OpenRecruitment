import Image from 'next/image'
import timelineSvg from '@/images/timeline.svg'

const NormalWidthTimeline = () => {
  return (
    <div className="flex justify-center items-center h-[300]px">
      <Image src={timelineSvg} alt="timeline" />
    </div>
  )
}

export default NormalWidthTimeline