import Image from "next/image"
import styles from "../ui/ui.module.css"

export const Cover = ({src}) => {
    return (
        <Image src={src} alt="cover"/>
    )
}


export const Title = ({children}) =>{
    return (
        <span className={}>{children}</span>
    )
}

export const Artist = ({artist}) => {
    return (
        <p>{artist}</p>
    )
}

export const Duration = ({duration}) => {
    <span>{duration}</span>
}