'use client'

import { createProduct } from '@/app/lib/actions';
import styles from './moreButton.module.css';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';



const MoreButton = ({catId}) => {

  const [loading, setLoading] = useState(false);

  const handleCreateProduct = async (e, id) => {
    e.preventDefault()
    setLoading(true)
    await createProduct(id)
    setLoading(false)
  }

  return (
    <div className={styles.addProductContainer}>
        {loading ? 
          <button className={styles.button}>
              <CircularProgress size={12} color='info' />
          </button>
        :
          <button className={styles.button} onClick={(e) => handleCreateProduct(e, catId)}>+ Agregar Producto</button>
        }
    </div>
  )
}

export default MoreButton
