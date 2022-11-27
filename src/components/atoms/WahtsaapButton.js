import React, { useState, useEffect } from "react";
import "../estilos/estilos.css"


const WahtsaapButton = () => {

    const [showWsapBtn, setShowWsapBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowWsapBtn(true);
            } else {
                setShowWsapBtn(false);
            }
        });
    }, []);

  return (
    <div>
        {" "}
        {showWsapBtn && (
        
      <a
        href="https://api.whatsapp.com/send?phone=5491131887257&text=Hola,"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
        >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      )}{" "}
    </div>
  )
}

export default WahtsaapButton