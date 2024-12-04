"use client";

import { useState } from 'react';
import Modal from 'react-modal';
import { FilledButton } from '../components/Buttons';


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
         <button className={`inline font-medium bg-transparent border rounded-full md:px-4 px-3.5 md:py-2 py-1.5 md:text-base text-sm transition-colors`} onClick={() => setIsOpen(true)} >Fun Fact</button>
         <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
            <h4 className="text-lg font-medium gap-3">Fun Fact</h4>
            <br/>
            <ul className="flex flex-col gap-y-5">
               {dso.fun_facts.map((fact) => (
                  <li
                     key={fact}
                     className="text-xs text-secondary-800 px-2 py-0.5 bg-secondary-100"
                  >
                  {fact}
                  </li>
               ))}
            </ul>
            <br/>
            <button className={`inline font-medium bg-transparent border rounded-full md:px-4 px-3.5 md:py-2 py-1.5 md:text-base text-sm transition-colors`} onClick={() => setIsOpen(false)}>Close</button>
         </Modal>
      </div>
   )
}
