import Image from "next/image";
import Logo from "../../../public/logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import { socialList } from "../constant";

const Footer = () => (
  <footer className="bg-[--primary] pt-[70px]">
    <div className="container mx-auto px-6">
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="">
          <Image src={Logo} alt="Logo" width={320} className="mb-8" />
          <ul className="text-white ml-4 hidden lg:flex">
            {socialList.map((item, index) => <li key={index} className="mr-3"><Link className='block w-[16px]' href={item.url}><FontAwesomeIcon height={16} icon={item.icon} /></Link></li>)}
          </ul>
        </div>
        <div className="text-[14px] pl-4">
          <p className="mb-8 text-[16px]">Contact Us</p>
          <p className="mb-2">10 Anson Rd, #28-04 International <br /> Plaza Singapore 079903</p>
          <p>E-Mail: <a href="mailto:info@vupico.com">info@vupico.com</a></p>

          <ul className="text-white flex mt-8 lg:hidden">
            {socialList.map((item, index) => <li key={index} className="mr-3"><Link className='block w-[16px]' href={item.url}><FontAwesomeIcon height={16} icon={item.icon} /></Link></li>)}
          </ul>
        </div>
      </div>

      <p className="border-solid border-t border-[#e8e8ff] mt-8 py-8 text-center">
      © 2023 VUPICO. All Rights Reserved.
      </p>
    </div>
  </footer>
)

export default Footer