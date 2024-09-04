'use client'

import { deleteProduct, updateProduct } from '@/app/lib/actions';
import styles from './product.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import SwitchToggle from '../SwitchToggle/SwitchToggle';
import CircularProgress from '@mui/material/CircularProgress';



const Product = ({name, description, price, id, isActive, categoryId}) => {

    const [product, setProduct] = useState({
        productId: id,
        name: name,
        description: description,
        price: price,
        isActive: isActive
    });
    const [loading, setLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [changes, setChanges] = useState(false);
    

    const handleOnChange = (e, field) => {
        setChanges(true)
        setProduct((prevState) => ({
            ...prevState, [field]: e.target.value,
        }))
    }


    const handleUpdateProduct = async (e, product) => {
        e.preventDefault()
        setLoading(true)
        await updateProduct(product)
        setLoading(false)
        setChanges(false)
    }

    const handleDeletePorduct = async (e, productId) => {
        e.preventDefault()
        setDeleteLoading(true)
        await deleteProduct(productId)
        setDeleteLoading(false)
    }

     
  return (
    <form className={styles.productsContainer} key={id} action={updateProduct}>
        <div className={styles.inputContainer}>
            <label className={styles.label}>Nombre</label>
            <input className={styles.input} defaultValue={product?.name} name='name' type='text' onChange={(e) => handleOnChange(e, 'name')} placeholder='Nombre' />
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>Descripcion</label>
            <textarea className={styles.textarea} defaultValue={product?.description} name='description' type='text' onChange={(e) => handleOnChange(e, 'description')} placeholder='Descripción' />
        </div>
        <div className={styles.inputContainer}>
            <label className={styles.label}>Precio</label>
            <input className={styles.inputPrice} defaultValue={product?.price} name='price' type='number' onChange={(e) => handleOnChange(e, 'price')} placeholder='Precio' />
        </div>
        <input defaultValue={product?.productId} style={{display: 'none'}} name='id' type='text' />
        <div className={styles.optionsContainer}>
            {isActive ? 'Activado' : 'Desactivado'}
            <SwitchToggle bool={product?.isActive} id={product?.productId} type={'isActive'} product={product} />
            {deleteLoading ?
                <div className={styles.iconContainer} >
                    <CircularProgress color='inherit' fontSize='inherit' size={15} />
                </div>
                :
                <div className={styles.iconContainer} onClick={(e) => handleDeletePorduct(e, product.productId)} >
                    <DeleteIcon color='inherit' fontSize='inherit' />
                </div>
            }
        </div>
        {loading ? 
            <button className={styles.disabledButton} disabled><CircularProgress size={15} /></button>
        :
            (changes ?
                <button className={styles.button} type='submit' onClick={() => handleUpdateProduct(product)}>Guardar Cambios</button>
                :
                <button className={styles.disabledButton}>Guardar Cambios</button>
            )
        }
    </form>
  )
}

export default Product
