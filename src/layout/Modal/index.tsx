import { useState } from "react";
import Modal from "@mui/material/Modal";
import styles from "./modal.module.css";
import modalImage from "../../assets/images/image4.png";
import iconModal from "../../assets/svgs/newsletter-mail-icon.svg";
import iconSend from "../../assets/svgs/send.svg";

const ModalCustom = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.modalContainer}>
        <span onClick={handleClose} className={styles.modalCloseText}>
          FECHAR
        </span>
        <div className={styles.modalImageContainer}>
          <img className={styles.modalImage} src={modalImage} alt="imagem" />
        </div>
        <div className={styles.modalContent}>
          <img className={styles.iconModalImage} src={iconModal} alt="icon" />
          <span className={styles.modalTitle}>Bem Vindo à MAEZTRA</span>
          <span className={styles.modalSubtitle}>
            Receba em Primeira mão{" "}
            <strong>desconto e ofertas exclusivas</strong>
          </span>
          <input
            className={styles.modalInput}
            type="text"
            placeholder="Digite seu email"
          />
          <button className={styles.modalButton}>
            Enviar <img src={iconSend} />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export { ModalCustom };
