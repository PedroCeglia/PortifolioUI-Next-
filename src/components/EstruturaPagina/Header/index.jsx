import {HeaderStyle, HeaderNavStyle} from "./style"
import { useState, useEffect } from "react"
import Image from "next/image"
import { navLinksList } from "@/constants"
import toggleOpen from "../../../../public/assets/icons/menu.png"
import toggleClose from "../../../../public/assets/icons/close.png"
import style from "@/styles"


export default function Header({scrollPosition}){
    const [toggleMenu, setToggleMenu] = useState("isClose")
    function handleToggleMenuButton(nameClass){
        setToggleMenu(nameClass)
    }

    const [headerBackground, setHeaderBackGround] = useState("transparent")
    function verifyHeaderPosition(){
        if(scrollPosition>50){
            setHeaderBackGround(style.theme.rgbaFunctions.getColor1RGBA(.9))
        } else{
            setHeaderBackGround("transparent")
        }
    }
    useEffect(()=>{
        verifyHeaderPosition()
    },[scrollPosition])

    return(
        <HeaderStyle style={{backgroundColor:`${headerBackground}`}}>
            <span>PedroCeglia | Developer UI</span>
            <HeaderNavStyle>
                <div className="hasSize">
                    <nav>
                        <ul>
                            {navLinksList.map((link,key)=>{
                                return(
                                    <li key={key}><a href={link.path}>{link.linkName}</a></li>
                                )
                            })}
                        </ul>
                    </nav>                    
                </div>
                <div className={`hasntSize ${toggleMenu}`}>
                    <nav>
                        <ul>
                            {navLinksList.map((link,key)=>{
                                return(
                                    <li key={key}><a href={link.path}>{link.linkName}</a></li>
                                )
                            })}
                        </ul>
                    </nav> 
                    <Image className="imgToggle openImage" src={toggleOpen} alt="Menu Open Icon" onClick={()=>handleToggleMenuButton("isOpen")}/>
                    <Image className="imgToggle closeImage" src={toggleClose} alt="Menu Close Icon" onClick={()=>handleToggleMenuButton("isClose")}/>
                </div>
            </HeaderNavStyle>
        </HeaderStyle>
    )
}