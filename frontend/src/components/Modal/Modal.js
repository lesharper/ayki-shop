import React from 'react';

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ?
            "flex h-screen w-screen fixed top-0 left-0 items-center justify-center  opacity-100 pointer-events-auto duration-300 z-10"
            : " flex h-screen w-screen fixed top-0 left-0 items-center justify-center opacity-0 pointer-events-none"
        } onClick={() => setActive(false)}>
            <div
                className={active ? "scale-100" : "flex justify-center items-center p-16 rounded-md bg-white scale-50 transition-all duration-75 h-28 w-56"}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;
