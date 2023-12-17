import Image from "next/image";
import Background from "../../public/home/bg.png";
import BackgroundSM from "../../public/home/bg-xs.png";
import Banner1 from "../../public/home/accelerate.jpeg";
import Banner2 from "../../public/home/track-value.jpeg";
import Banner3 from "../../public/home/innovate.jpeg";
import HomeBanner from "./components/HomeBanner";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { faLineChart, faNetworkWired, faObjectUngroup, faClipboard, faClone } from "@fortawesome/free-solid-svg-icons";
import SdpModule from "./components/SdpModule";

config.autoAddCss = false;

const sdpModules = [
  {content: 'Extended Producer Responsibility', icon: faLineChart},
  {content: 'Life Cycle Assessment (LCA)', icon: faObjectUngroup},
  {content: 'Carbon Management', icon: faNetworkWired },
  {content: 'Supplier Data Protocol', icon: faClipboard},
  {content: 'Environmental, Social and Governance', icon: faClone},
  {content: 'Master Data Governance Sustainability(MDG-S)', icon: faClone},
]

const HomeBanners = [
  {imgUrl: Banner1, altTxt: "Accelerate"},
  {imgUrl: Banner2, altTxt: "Track Value"},
  {imgUrl: Banner3, altTxt: "Innovate"},
]

const Home = () => {
  return (
    <>
      <section className="bg-[--primary] mt-20 overflow-hidden">
        <div className="container mx-auto h-[calc(75vh-80px)] pt-[15vh] px-6 lg:px-0">
          <h1 className="text-[26px] leading-loose lg:text-[48px] text-center lg:text-left">
            <span className="text-[--secondary]">S</span>ustainability{" "}
            <span className="text-[--secondary]">D</span>ata in One{" "}
            <span className="text-[--secondary]">P</span>latform
            <br />
            <b>Accelerate. Track. Innovate.</b>
          </h1>
        </div>
        <Image src={Background} className="hidden lg:block absolute bottom-0" alt="Laptop" />
        <Image src={BackgroundSM} className="lg:hidden bottom-0" alt="Laptop" />
      </section>
      <section className="lg:h-[25vh] relative z-1">
        <div className="container mx-auto md:pt-6 px-6 pt-20 lg:px-0">
          <div className="lg:w-1/2 lg:ml-[50%]">
            <p className="text-[--primary] text-[16px] md:text-xl lg:text-2xl font-medium text-center lg:text-left">
              Drive innovation and fast-track your journey to carbon neutrality
              and beyond. Kickstart your sustainable transformation with SDP
              now!
            </p>
          </div>
        </div>
      </section>
      <section className="my-20 px-6">
        {HomeBanners.map((banner) => <HomeBanner key={banner.altTxt} imgUrl={banner.imgUrl} altTxt={banner.altTxt} />)}
      </section>
      <section className="container mx-auto px-6">
        <h2 className="text-[35px] mb-5 relative text-[--primary] before:absolute before:w-[19px] before:h-[2px] before:bg-[--secondary] before:bottom-0 after:absolute after:bg-[--secondary] after:w-[9px] after:h-[2px] after:left-[24px] after:bottom-0">
          SDP Modules
        </h2>
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
          {sdpModules.map((module, index) => <SdpModule key={index} content={module.content} icon={module.icon} />)}
        </div>
      </section>
    </>
  );
};

export default Home;
