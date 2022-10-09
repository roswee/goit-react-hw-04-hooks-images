import React, { Component } from 'react';
import styles from "./Modal.module.css";

const {overlay, modal} = styles;

export class Modal extends Component {

    handleOverlay = (e) => {
        const overlay = e.currentTarget;
        if (e.target === overlay) {
          this.props.closeModal();
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                this.props.closeModal();
            }
        })
    };

    componentWillUnmount() {
        document.removeEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                this.props.closeModal();
            }
        })
    };


  render() {
    const {data} = this.props;
    return (
        <div className={overlay} onClick={this.handleOverlay}>
        <div className={modal}>
            <img src={data.src} alt={data.alt} />
        </div>
        </div>
    )
  }
}

export default Modal