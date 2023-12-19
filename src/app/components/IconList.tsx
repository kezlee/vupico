import { ListItem } from "../models/interface"
import Image from 'next/image';
import Link from 'next/link';

interface IconListProps {
  list: ListItem[]
}

const IconList:React.FC<IconListProps> = ({ list }) => (
  <ul className="flex items-center justify-between mt-8 text-center flex-wrap">
    {list.map((item, i) => (
      <li key={i} className="flex-[50%] lg:flex-auto">
        <Link href={item.url ? item.url : ''} className={`${item.url ? 'cursor-pointer' : 'cursor-default'} flex items-center flex-col px-3`}>
          <Image className="hover:scale-90 duration-1000 ease-in-out transition-all" src={item.icon} alt="" />
          <p className="mt-6 mb-3 lg:mb-0">{item.desc}</p>
        </Link>
      </li>
    ))}
  </ul>
)

export default IconList