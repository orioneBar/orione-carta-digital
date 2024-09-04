'use client'

import { useState } from 'react';
import styles from './switchToggle.module.css';
import { updateActiveProduct } from '@/app/lib/actions';



const SwitchToggle = ({bool, id, type, product}) => {

    const [checked, setChecked] = useState(bool);
    
    const handleChange = async () => {
        setChecked(!checked)
        const checkedProduct = {...product, isActive: !checked}
        await updateActiveProduct(checkedProduct)
    }

  return (
    <div className={styles.checkboxWrapper}>
      <input className={styles.checkbox} id={id} type="checkbox" checked={checked} onChange={handleChange} />
      <label className={styles.checkboxLabel} htmlFor={id} />
    </div>
  )
}

export default SwitchToggle
