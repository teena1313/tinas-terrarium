"use client";

import { useState } from 'react';
import Modal from 'react-modal';

export default function PopUp( {dso} ) {
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
         <button onClick={() => setIsOpen(true)}>Fun Facts</button>
         <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
            <h4 className="text-sm font-medium">Fun Fact</h4>
            <ul className="flex flex-wrap gap-2">
               {dso.fun_facts.map((fact) => (
                  <div>
                     <li
                        key={fact}
                        className="text-xs text-secondary-800 px-2 py-0.5 bg-secondary-100"
                     >
                     {fact}
                     </li>
                  </div>
               ))}
            </ul>
            <button onClick={() => setIsOpen(false)}>Close</button>
         </Modal>
      </div>
   )
}
