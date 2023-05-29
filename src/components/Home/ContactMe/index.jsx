import EstruturaSection from "@/components/EstruturaSection";
import { ContactMeSectionStyle } from "./style";
import ContactForm from "./ContactForm";
import { Planet3DComponent } from "@/components/3D";
import Stars3DContainer from "../StartsContainer";

export default function ContactMeSection(){

    return(
        <EstruturaSection headerSectionDates={null} changeSectionSlug={"intro"} idSection={"contact-me"} >
            <ContactMeSectionStyle>
                <ContactForm/>
                <Planet3DComponent/>
                <Stars3DContainer/>
            </ContactMeSectionStyle>
        </EstruturaSection>
    )
}

