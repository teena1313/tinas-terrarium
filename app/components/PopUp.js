"use client";

import { useState } from 'react';
import Modal from 'react-modal';

export default function PopUp() {
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
         <button onClick={() => setIsOpen(true)}>Open Modal</button>
         <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
            <h1>Modal Content</h1>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
         </Modal>
      </div>
   )
}
