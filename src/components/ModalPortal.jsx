import { useState } from "react";
import { createPortal } from "react-dom";

const ModalPortal = () =>{
    const [ modalOpen, SetModalOpen ] = useState(false);
    const Modal  = ({ handleCloseClick }) => {
        return(
            <>
                <p>モーダル</p>
                <button onClick={ handleCloseClick }>閉じる</button>
            </>
        )
    }
    const Portal = () =>{
        const target = document.getElementById("modal");
        return createPortal(Modal, target)
    }
    return(
        <div id="modal">
            <h3>Modal</h3>
            <button
                className="bg-primary-subtle"
                onClick={() => SetModalOpen(true)} 
                disabled={modalOpen}>モーダル表示
            </button>
            {
                modalOpen && 
                (                    
                    <Portal>
                        <Modal handleCloseClick={() => SetModalOpen(false)} />
                    </Portal>
                )
            }
        </div>
    )
}

export { ModalPortal }