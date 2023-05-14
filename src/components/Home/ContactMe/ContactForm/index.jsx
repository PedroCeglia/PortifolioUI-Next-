import { ContactFormStyle, ContactFormInputStyle } from "./style";

export default function ContactForm(){
    return(
        <ContactFormStyle>
            <h3>Entre em contato conosco</h3>

            <ContactFormInputStyle>
                <span>Nome</span>
                <input type="text" placeholder="Name"/>                
            </ContactFormInputStyle>

            <ContactFormInputStyle>
                <span>Email</span>
                <input type="email" placeholder="Email"/>                
            </ContactFormInputStyle>

            <ContactFormInputStyle>
                <span>Mensagem</span>
                <textarea placeholder="Escreva sua mensagem"/>                
            </ContactFormInputStyle>

            <button>Enviar</button>
            
        </ContactFormStyle>
    )
}