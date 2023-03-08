import React, { Component } from "react";
import { Overlay, ModalStyled } from "./modalStyled";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.clickToEsc)
    }

    componentWillUnmount(){
        window.removeEventListener ('keydown', this.clickToEsc)
    }

    clickToEsc = (e) =>{
        if (e.code === 'Escape') {
                console.dir(this.props.onClick);    
                this.props.onClick()
            }
    }
    

    render() {
        const {onClick, src, alt} = this.props
        return createPortal(
            <Overlay onClick={onClick}>
                <ModalStyled
                     src={src} alt={alt} />
                
            </Overlay>, modalRoot
        )
    }
}

Modal.propTypes = {
    onClick: PropTypes.func.isRequired,
    src: PropTypes.string,
    alt: PropTypes.string
}