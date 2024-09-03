import instaImg from "../assets/icons8-instagram-logo-60.png"
import whatsappImg from "../assets/icons8-whatsapp-60.png"
import { ImageButton } from "./Image-click";

export function Contact(){
    return(
        <>
    
          <div id="flex-contact-img">

     <ImageButton
              onClick={() =>
                window.open(
                  "https://www.instagram.com/mosky.szn/",
                  "_blank"
                )
              }
              image={instaImg}
            />
             <ImageButton
              onClick={() =>
                window.open(
                  "https://wa.me/09012424707",
                  "_blank"
                )
              }
              image={whatsappImg}
            />
     </div>
        </>

    )
}