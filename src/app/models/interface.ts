import { StaticImageData } from "next/image"

export interface ContentLeftRightItem {
  isImageLeft: boolean
  description?: string | TrustedHTML
  list: string[] | TrustedHTML[]
  imgUrl: StaticImageData
  button?: ButtonItem
  disclaimer?: string
}

export interface ButtonItem {
  text: string
  url: string
}

export interface ListItem {
  icon: StaticImageData,
  desc: string,
  url?: string
}
