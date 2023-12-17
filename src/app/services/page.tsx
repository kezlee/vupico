import Service1 from '../../../public/services/Groupsapbi.png'
import Service2 from '../../../public/services/Group_1Master.png'
import Service3 from '../../../public/services/Groupenterprise.png'
import Service4 from '../../../public/services/Groupmanagement.png'
import Service5 from '../../../public/services/Groupblockchain.png'
import Service6 from '../../../public/services/Groupbigdata.png'
import Image from 'next/image'

const serviceList = [
  {imgUrl: Service1, title: 'SAP BI and Analytics', content: 'Data organization, centralization and dissemination'},
  {imgUrl: Service2, title: 'SAP Master Data Governance Management', content: 'Clean your data and maintain data quality'},
  {imgUrl: Service3, title: 'Corporate/Enterprise Data Strategy Services', content: 'Align data to fit your business goals'},
  {imgUrl: Service4, title: 'Project Management Services', content: 'End-to-end managing successful delivery of projects'},
  {imgUrl: Service5, title: 'Blockchain Solutions', content: 'New-Age Technologies for New-Age Businesses'},
  {imgUrl: Service6, title: 'Big Data Services', content: 'Transforming data to meaningful data solutions'},
]

const Services = () => (
  <section className='container mx-auto px-6 text-[--primary] text-center mt-[100px] mb-[70px] block text-[20px]'>
    <p className='font-medium'>Our Services</p>
    <h2 className='text-[40px] font-bold my-3'>Technologies Can Boost Businesses</h2>
    <p className='text-3xl lg:text-xl'>Our team specializes in SAP technologies centered data</p>
    <div className="grid lg:grid-cols-3 my-10 gap-10">
      {serviceList.map((item) => (
        <div key={item.content} className='flex flex-col items-center justify-start'>
          <Image src={item.imgUrl} alt={item.title} className='min-h-[220px]' />
          <h3 className='mt-5 font-bold'>{item.title}</h3>
          <p className='mt-3'>{item.content}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Services