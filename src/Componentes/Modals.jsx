import React from 'react'
import Modal from './Modal'
import { useModal } from '../Hooks/useModal'
import ContactForm from '../Componentes/ContactForm'
import SongForm from '../Componentes/SongForm'

const Modals = () => {

    const [isOpen1, openModal1,closeModal1] = useModal(false)    
    const [isOpen2,openModal2,closeModal2] = useModal(false)
    const [isOpenContacto,openContacto,closeContacto] = useModal(false)
    const [isOpenSong ,openSong,closeSong] = useModal(false)


    return (
    <div>
        <h2>Modales</h2>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen={isOpen1} closeModal={closeModal1}>
            <h2>modal 1</h2>
            <p>este es el contenedro del modal 1</p>
            <img src="	https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales.jpg" alt="Animals"></img>
        </Modal>
        <button onClick={openModal2}>Modal 2</button>
        <Modal isOpen={isOpen2} closeModal={closeModal2}>
            <h2>otro modal</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ipsa velit optio obcaecati odit, ad, reprehenderit ullam
                 repellendus quasi repudiandae deserunt nihil adipisci 
                possimus non aliquid a. Eaque eligendi incidunt aperiam.</p>
            <img src='https://certifiedhumanelatino.org/wp-content/uploads/2017/11/CERTIFIED-HUMANE_Post-blog.png' alt='animals2'></img>
        </Modal>
        <button onClick={openContacto}>modal contacto</button>
        <Modal isOpen={isOpenContacto} closeModal={closeContacto}>
            <ContactForm/>
        </Modal>
        <button onClick={openSong}>modal song</button>
        <Modal isOpen={isOpenSong} closeModal={closeSong}>
            <SongForm/>
        </Modal>
    </div>
  )
}

export default Modals