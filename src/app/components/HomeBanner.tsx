import Image, { StaticImageData } from "next/image";

const HomeBanner:React.FC<{imgUrl: StaticImageData, altTxt: string}> = ({imgUrl, altTxt}) => {
  return (
    <div className="container mx-auto">
      <Image src={imgUrl} className="mb-12" alt={altTxt} />
    </div>
  )
}

export default HomeBanner