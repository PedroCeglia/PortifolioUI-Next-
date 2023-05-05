import { useState, useEffect } from "react"
import {EstruturaPaginaStyle, ConteudoPaginaStyle} from "./style"
import Head from 'next/head'
import Header from "./Header"
import Footer from "./Footer"


export default function EstruturaPagina(props){
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
      function changeScrollPosition() {
        setScrollPosition(window.scrollY);
      }
      window.addEventListener('scroll', changeScrollPosition);
      return () => {
        window.removeEventListener('scroll', changeScrollPosition);
      };
    }, []);

    return(
        <>
            <Head>
                <title>PedroCeglia | Portifólio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <EstruturaPaginaStyle>
                <div className="projeto-top-page"></div>
                <Header scrollPosition={scrollPosition}/>
                <ConteudoPaginaStyle>
                    {props.children}  
                </ConteudoPaginaStyle>
                <Footer/>
            </EstruturaPaginaStyle>
        </>

    )
}
