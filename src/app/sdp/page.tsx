import Image from 'next/image';
import Radial from '../../../public/sdp/header-radial.png'
import Laptop from '../../../public/sdp/laptop.png'
import ContentLeftRight from '../components/ContentLeftRight';
import { IndustriesList, SdpContentEmpowering, SolutionSuiteList, TestimonialSocialList, sdpContentBenefits, sdpContentHow } from '../constant';
import ContentHeader from '../components/ContentHeader';
import IconList from '../components/IconList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BenefitImg from '../../../public/sdp/sdp_pic.png'
import Link from 'next/link';

const SDP = () => (
  <>
    <section className={`w-full bg-gradient-to-r from-[#131e49] to-[#3552c5]`}>
      <div className="container mx-auto px-6">
        <Image className='absolute top-0 left-0' src={Radial} alt='Radial Image' />
        <div className='flex items-center justify-center h-[800px] lg:h-[886px]'>
          <h1 className="text-[26px] lg:text-[40px] text-center lg:text-left font-medium">
            <span className="text-[--secondary]">S</span>ustainability{" "}
            <span className="text-[--secondary]">D</span>ata in One{" "}
            <span className="text-[--secondary]">P</span>latform
            <br />
            <span className='mt-8 block'>Accelerate. Track. Innovate.</span>
          </h1>
          <Image className='w-7/12' src={Laptop} alt='Laptop Image' />
        </div>    
      </div>
    </section>
    <section className="container mx-auto px-6 text-[--primary] pt-20 pb-20 text-[16px]">
      <ContentHeader title={`Empowering "Sustainability Transformation" of your Business`} />
      <ContentLeftRight content={SdpContentEmpowering}></ContentLeftRight>
    </section>
    <section className="bg-[#f9faff] text-[--primary] pt-20 pb-20 text-[16px]">
      <div className='container mx-auto px-6'>
        <ContentHeader title="HOW DOES IT WORK?" />
        <ContentLeftRight content={sdpContentHow}></ContentLeftRight>
      </div>
    </section>
    <section className="container mx-auto px-6 text-[--primary] pt-20 pb-20 text-[16px]">
      <ContentHeader title={`What Our Clients Say`} />
      <div className='bg-gradient-to-r from-[#131e49] to-[#3552c5] shadow-[0_2px_48px_0_rgba(0,0,0,0.08)] py-[20px] px-[25px] rounded-md text-white text-[14px]'>
        <h3>Francois Keet</h3>
        <p>VP Head of Global Business Transformation, Shiseido Ltd</p>
        <ul className='flex mt-3'>
          {TestimonialSocialList.map((item, i) => <li className='mr-3' key={i}><Link href={item.url} className='block w-[16px]'><FontAwesomeIcon icon={item.icon} /></Link></li>)}
        </ul>
        <p  className='mt-8'>VUPICO team came in and helped solve our business critical Sustainability needs when there weren’t any “ready to use” solutions in the market. They have been working with me in Analytics and Data Management to deliver an integrated solution for Extended Producer Responsibility reporting (EPR) and Life-Cycle Assessment simulation (CO2 usage) for the business users. I can always depend on VUPICO for their customer focus and quality delivery.</p>
      </div>
    </section>
    <section className="bg-[#f9faff] text-[--primary] pt-20 pb-20 text-[16px]">
      <div className='container mx-auto px-6'>
        <ContentHeader title="Key Capabilities / Benefits" />
        <ContentLeftRight content={sdpContentBenefits}></ContentLeftRight>
        <Image src={BenefitImg} alt="Key Capabilities / Benefits Image" className='hover:scale-90 duration-1000 ease-in-out transition-all' />
      </div>
    </section>
    <section className="container mx-auto px-6 text-[--primary] pt-20 pb-20 text-[16px]">
      <ContentHeader title={`Key Industries`} />
      <IconList list={IndustriesList} />
    </section>
    <section className="bg-[#f9faff] text-[--primary] pt-20 pb-20 text-[16px]">
      <div className='container mx-auto px-6'>
        <ContentHeader title="About US" />
        <p className='text-[20px] my-8'>VUPICO transforms data into business value. Since its establishment in 2015, we’ve grown a global team and refined a range of data and analytics solutions that strategically and systematically enhance the health, usability, and value of data across the enterprise. VUPICO solutions are results-focused. Results go beyond the data we optimize, or the report we design, unlocking massive cost savings, reducing waste, and new opportunities for growth. Currently VUPICO has offices in Tokyo, development and support centres in Manila and Hyderabad, and global headquarter office in Singapore. VUPICO is official system integration partner with SAP and Utopia. In todays rapidly changing and challenging times, VUPICO is trusted partner for our clients going through digital transformation and taking advantage of expanding data and analytics capabilities to drive business value.</p>
        <ContentHeader title="VUPICO SOLUTIONS SUITE" />
        <IconList list={SolutionSuiteList} />
      </div>
    </section>
  </>
)

export default SDP;