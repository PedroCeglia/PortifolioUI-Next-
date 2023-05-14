import EstruturaSection from "@/components/EstruturaSection";
import { ContactMeSectionStyle } from "./style";
import ContactForm from "./ContactForm";
import dynamic from 'next/dynamic';

const Planet3DComponent = dynamic(()=> import("@/components/3D/Planet3dComponent"))

export default function ContactMeSection(){
    const isCSR = process.browser? "CSR -- Contact-Me":"SSR  -- Contact-Me"
    console.log(isCSR)
    return(
        <EstruturaSection headerSectionDates={null} changeSectionSlug={"intro"} idSection={"contact-me"} >
            <ContactMeSectionStyle>
                <ContactForm/>
                <Planet3DComponent/>
            </ContactMeSectionStyle>
        </EstruturaSection>
    )
}