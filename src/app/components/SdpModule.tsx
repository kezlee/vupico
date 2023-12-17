import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SdpModule:React.FC<{content: string, icon: IconProp}> = ({content, icon}) => {
  return (
    <div className="inline-block shadow-[0_2px_48px_0_rgba(0,0,0,0.06)]">
      <a className="flex align-middle flex-col text-center text-[#243887] rounded-md p-[56px] hover:text-[#0a58ca] hover:bg-gradient-to-r from-[#131e49] to-[#3552c5] hover:text-white">
        <FontAwesomeIcon icon={icon} className="text-[28px]" />
        <h5 className="mb-[15px] text-center text-[16px] mt-[20px]">{content}</h5>
      </a>
    </div>
  )
}

export default SdpModule