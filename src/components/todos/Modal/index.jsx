import React from 'react'
import { createPortal } from 'react-dom'
import './styles.css'

export default function Modal({ children }) {
    return createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    )
}