import Image from "next/image";
import Logo from "../../../public/logo.webp";
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

const socialList = [
  {icon: faTwitter},
  {icon: faLinkedin},
  {icon: faYoutube},
]

const Footer = () => (
  <footer className="bg-[--primary] pt-[70px]">
    <div className="container mx-auto">
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="">
          <Image src={Logo} alt="Logo" width={320} className="mb-8" />
          <ul className="text-white ml-4 hidden lg:flex">
            {socialList.map((item, index) => <li key={index} className="mr-3"><a><FontAwesomeIcon icon={item.icon} /></a></li>)}
          </ul>
        </div>
        <div className="text-[14px] pl-4">
          <p className="mb-8 text-[16px]">Contact Us</p>
          <p className="mb-2">10 Anson Rd, #28-04 International <br /> Plaza Singapore 079903</p>
          <p>E-Mail: <a href="mailto:info@vupico.com">info@vupico.com</a></p>

          <ul className="text-white flex mt-8 lg:hidden">
            {socialList.map((item, index) => <li key={index} className="mr-3"><a><FontAwesomeIcon icon={item.icon} /></a></li>)}
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