import React from 'react'
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

function Whatsapp() {
  return (
    <WhatsAppWidget
      phoneNumber="918766015085"
      sendButtonText="Start Chat"
      companyName="Aatmann Dahanu"
    />
  );
}

export default Whatsapp