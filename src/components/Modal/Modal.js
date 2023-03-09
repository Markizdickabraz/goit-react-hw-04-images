import { useEffect} from "react";
import { Overlay, ModalStyled } from "./modalStyled";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default function Modal(props) {

    useEffect(() => {
        const clickToEsc = (e) => {
        if (e.code === 'Escape') {
            props.onClick();
        }
        return;
    }
        window.addEventListener('keydown', clickToEsc)
        
        return() => { window.removeEventListener('keydown', clickToEsc)}
            })

        const {onClick, src, alt} = props
        return createPortal(
            <Overlay onClick={onClick}>
                <ModalStyled
                     src={src} alt={alt} />
            </Overlay>, modalRoot
        )
    }

Modal.propTypes = {
    onClick: PropTypes.func.isRequired,
    src: PropTypes.string,
    alt: PropTypes.string
}