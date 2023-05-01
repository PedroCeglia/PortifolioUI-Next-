import {HeaderStyle, HeaderNavStyle} from "./style"
import { useState, useEffect } from "react"
import Image from "next/image"
import { navLinksList } from "@/constants"
import toggleOpen from "../../../public/assets/icons/menu.png"
import toggleClose from "../../../public/assets/icons/close.png"

export default function Header(){
    const [toggleMenu, setToggleMenu] = useState("isOpen")

    function handleToggleMenuButton(nameClass){
        setToggleMenu(nameClass)
    }

    return(
        <HeaderStyle>
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