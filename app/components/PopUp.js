"use client";

import { useState } from 'react';
import Modal from 'react-modal';


export default function PopUp(props) {
   const [isOpen, setIsOpen] = useState(false)
   const customStyles = {
      overlay: {
         backgroundColor: 'rgba(0, 0, 0, 0.6)'
      },
      content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)'
      }
   }
   return (
      <div>
         <button className={`inline font-medium bg-transparent border rounded-full md:px-4 px-3.5 md:py-2 py-1.5 md:text-base text-sm transition-colors`} onClick={() => setIsOpen(true)} >{props.name}</button>
         <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
            {props.children}
            <button className={`inline font-medium bg-transparent border rounded-full md:px-4 px-3.5 md:py-2 py-1.5 md:text-base text-sm transition-colors`} onClick={() => setIsOpen(false)}>Close</button>
         </Modal>
      </div>
   )
}
