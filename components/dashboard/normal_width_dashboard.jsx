import Image from 'next/image';
import Link from 'next/link';
import profileSvg from '@/images/profilepicture/default.svg'

const NormalWidthDashboard = () => {
  const sectionStyle = "flex flex-col gap-3";
  const inputContainerStyle = "h-14 px-6 py-3 rounded-lg border border-[#889da8] flex items-center";
  const labelStyle = "text-[#1e1e1e] text-xl font-medium";
  const textStyle = "text-[#1e1e1e] text-lg";
  const cardStyle = "w-full p-6 bg-white rounded-lg shadow-[0px_1px_12px_0px_rgba(0,0,0,0.08)] flex flex-col gap-6";
  

  return (  
    <div className="w-full max-w-[1440px] mx-auto min-h-screen bg-neutral-50 flex flex-col items-center p-6 gap-6">
      <div className="text-center text-[#55457e] text-[40px] font-extrabold font-['Inter']">
        Dashboard
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[1200px] flex justify-center gap-[80px]">
        {/* Profile and Logout */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <Image 
              src={profileSvg}
              alt="Profile"
              width={96}
              height={96}
              priority
            />
          </div>
          <button className="px-6 py-2 bg-neutral-50 rounded-lg border-2 border-[#889da8] text-[#1e1e1e] text-xl">
            Logout
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-[800px] flex flex-col gap-[36px] mr-[203px]">
          {/* Main Card */}
          <div className={`${cardStyle} rounded-xl`}>
            {/* Email */}
            <div className={sectionStyle}>
              <div className={labelStyle}>Email</div>
              <div className={inputContainerStyle}>
                <div className={textStyle}>dummyemail@dummy.com</div>
              </div>
            </div>

            {/* Document Status */}
            <div className={sectionStyle}>
              <div className={labelStyle}>Document Status</div>
              <div className={inputContainerStyle}>
                <div className={textStyle}>dummyemail@dummy.com</div>
              </div>
            </div>

            {/* Requirements */}
            <div className={sectionStyle}>
              <div className={labelStyle}>Requirements</div>
              <div className="p-6 rounded-lg border border-[#889da8]">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-4">
                    <div>CV (ATS CV)</div>
                    <div>Motivation Letter</div>
                    <div className="flex gap-6">
                      <div>Instagram Story Upload</div>
                      <Link href="#" className="text-[#1e1e1e] underline">link story upload</Link>
                    </div>
                    <div className="flex gap-6">
                      <div>Twibbon InstaStory Upload</div>
                      <Link href="#" className="text-[#1e1e1e] underline">link twibbon</Link>
                    </div>
                    <div>Division Assigments (<span className="font-bold">check bellow here</span>)</div>
                  </div>
                  <div className="flex flex-col gap-4 items-center min-w-[200px]">
                    <div className="text-[#88ab7b] font-medium">Submitted</div>
                    <div className="text-[#889da8]">Empty</div>
                    <div className="text-[#889da8]">Empty</div>
                    <div className="text-[#889da8]">Empty</div>
                    <div className="text-[#889da8]">Empty</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-8 pt-3">
              <button className="h-12 px-6 py-3 bg-neutral-50 rounded-lg border-2 border-[#383f96] text-[#1e1e1e] text-xl">
                Tasks
              </button>
              <button className="w-[312px] h-12 px-6 py-3 bg-[#55457e] rounded-lg text-neutral-50 text-xl">
                Complete Requirements
              </button>
            </div>
          </div>

          {/* General Terms */}
          <div className={cardStyle}>
            <div className={labelStyle}>General Terms</div>
            <div className="flex flex-col gap-4">
              <div className={textStyle}>Lorem ipsum dolor sit amet</div>
              <div className={textStyle}>Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalWidthDashboard;
