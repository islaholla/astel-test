
import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, title, konten, image }) => {
  return (
    <>
      <div id="modal" className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          {image && (
            <div className="w-full h-72 p-2"> {/* Add padding around the image */}
              <img
                src={image}
                alt="Banner"
                className="w-full  mx-auto h-full object-cover object-cover rounded" // Limit width and maintain aspect ratio
              />
            </div>
          )}
          <div className={styles.modalContent}>
            {konten}
          </div>        </div>
      </div>
    </>
  );
};

export default Modal;