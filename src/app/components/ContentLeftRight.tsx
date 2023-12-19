import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image";
import Link from "next/link";
import { ContentLeftRightItem } from "../models/interface";

interface ContentLeftRightProps {
  content: ContentLeftRightItem[];
}

const ContentLeftRight:React.FC<ContentLeftRightProps> = ({ content }) => {  
  return (
    <>
      {content.map((item, index) => (
        <div key={index} className={`${item.isImageLeft ? 'lg:flex-row-reverse flex-col-reverse' : ''} flex items-center justify-between mb-[70px] last:mb-0 flex-col lg:flex-row`}>
          <div className='w-full lg:w-1/2 max-w-[744px]'>
            {item.description && <p className='mb-10 text-[20px]' dangerouslySetInnerHTML={{ __html: item.description }} />}
            <ul>
              {item.list.map((listItem, i) => (
                <li className="flex items-start" key={i}>
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} width={14} className='mt-2' />
                  </span>
                  <p className='ml-3 leading-8 hover:pl-[15px] duration-1000 ease-in-out transition-all' dangerouslySetInnerHTML={{ __html: listItem }} />
                </li>
              ))}
            </ul>
            {item.button && <Link href={item.button.url} className="bg-gradient-to-r from-[#131e49] to-[#3552c5] p-3 min-w-[173px] h-[46px] rounded-md text-center text-white text-[14px] mt-[48px] inline-block">{item.button.text}</Link>}
            {item.disclaimer && <p className='text-[16px] mt-[48px]'>{item.disclaimer}</p>}
          </div>
          <Image className='w-full lg:w-5/12 hover:scale-90 duration-1000 ease-in-out transition-all mt-8 lg:mt-0' src={item.imgUrl} alt='Manufacturer' />
        </div>
      ))}
    </>
    
  )
}

export default ContentLeftRight