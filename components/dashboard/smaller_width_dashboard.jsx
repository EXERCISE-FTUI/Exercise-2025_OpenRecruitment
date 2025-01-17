import Image from 'next/image';
import Link from 'next/link';

const SmallerWidthDashboard = () => {
  return (
    <div className="w-full max-w-[431px] mx-auto flex flex-col items-start">
      <div className="text-center text-[#55457e] text-3xl font-extrabold font-['Inter'] w-full p-4">
        Dashboard
      </div>

      {/* Main Info Card */}
      <div className="w-full p-[13.92px] bg-white rounded-[6.96px] shadow-[0px_0.5799999833106995px_6.960000038146973px_0px_rgba(0,0,0,0.08)] flex flex-col gap-[13.92px]">
        {/* Email Section */}
        <div className="flex flex-col gap-[6.96px]">
          <div className="text-[#1e1e1e] text-xs font-medium font-['Inter']">Email</div>
          <div className="h-[32.48px] px-[13.92px] py-[6.96px] rounded border border-[#889da8] flex items-center">
            <div className="text-[#1e1e1e] text-[10.44px] font-normal font-['Inter']">dummyemail@dummy.com</div>
          </div>
        </div>

        {/* Document Status Section */}
        <div className="flex flex-col gap-[6.96px]">
          <div className="text-[#1e1e1e] text-xs font-medium font-['Inter']">Document Status</div>
          <div className="h-[32.48px] px-[13.92px] py-[6.96px] rounded border border-[#889da8] flex items-center">
            <div className="text-[#1e1e1e] text-[10.44px] font-normal font-['Inter']">dummyemail@dummy.com</div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="flex flex-col gap-[6.96px]">
          <div className="text-[#1e1e1e] text-xs font-medium font-['Inter']">Requirements</div>
          <div className="px-[13.92px] py-[6.96px] rounded border border-[#889da8] flex justify-between">
            <div className="w-[212.86px] flex flex-col gap-[9.28px]">
              <div className="text-[#1e1e1e] text-[10.44px] font-normal font-['Inter']">CV (ATS CV)</div>
              <div className="text-[#1e1e1e] text-[10.44px] font-normal font-['Inter']">Motivation Letter</div>
              <div className="flex gap-[13.92px]">
                <div className="text-[#1e1e1e] text-[10.44px] font-normal font-['Inter']">Instagram Story Upload</div>
                <div className="text-[#1e1e1e] text-[10.44px] font-normal font-['Inter'] underline">link story upload</div>
              </div>
              <div className="flex gap-[13.92px]">
                <div className="text-[#1e1e1e] text-[10.44px] font-normal font-['Inter']">Twibbon InstaStory Upload</div>
                <div className="text-[#1e1e1e] text-[10.44px] font-normal font-['Inter'] underline">link twibbon</div>
              </div>
              <div className="text-[#1e1e1e] text-[10.44px] font-normal font-['Inter']">
                Division Assigments (<span className="font-bold">check bellow here</span>)
              </div>
            </div>
            <div className="flex flex-col gap-[9.28px] items-center">
              <div className="text-[#88ab7b] text-[10.44px] font-medium">Submitted</div>
              <div className="text-[#889da8] text-[10.44px]">Empty</div>
              <div className="text-[#889da8] text-[10.44px]">Empty</div>
              <div className="text-[#889da8] text-[10.44px]">Empty</div>
              <div className="text-[#889da8] text-[10.44px]">Empty</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-[18.56px] pt-[6.96px]">
          <button className="h-[27.92px] px-[13.92px] py-[6.96px] bg-neutral-50 rounded border border-[#383f96] text-[#1e1e1e] text-xs font-normal font-['Inter']">
            Tasks
          </button>
          <button className="w-[180.96px] h-[27.84px] px-[13.92px] py-[6.96px] bg-[#55457e] rounded text-neutral-50 text-xs font-normal font-['Inter']">
            Complete Requirements
          </button>
        </div>
      </div>

      {/* General Terms */}
      <div className="w-full p-[14.40px] bg-white rounded-[4.80px] shadow-[0px_0.6000000238418579px_7.200000286102295px_0px_rgba(0,0,0,0.08)] flex flex-col gap-[14.40px]">
        <div className="text-[#1e1e1e] text-xs font-medium font-['Inter']">General Terms</div>
        <div className="flex flex-col gap-[31.80px]">
          <div className="text-[#1e1e1e] text-[10.80px] font-normal font-['Inter']">Lorem ipsum dolor sit amet</div>
          <div className="text-[#1e1e1e] text-[10.80px] font-normal font-['Inter']">Lorem ipsum dolor sit amet</div>
        </div>
      </div>
    </div>
  );
};

export default SmallerWidthDashboard;
