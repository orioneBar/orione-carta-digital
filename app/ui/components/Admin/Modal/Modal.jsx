'use client'

import styles from './modal.module.css';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { createCategory } from '@/app/lib/actions';




export default function BasicModal({content}) {

  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await createCategory(formData)
    handleClose()
};


  return (
    <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
      <div onClick={handleOpen}>{content}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.box}>
            <div className={styles.closeButton} onClick={handleClose}>
                <CloseIcon color='inherit' /> 
            </div>
            <h3>Agregar Categoría</h3>
            <form className={styles.inputContainer} onSubmit={handleSubmit}>
                <input className={styles.input} type='text' name='name' />
                <button type='submit' className={styles.addButton}>Agregar</button>
            </form>
        </div>
      </Modal>
    </div>
  );
}

