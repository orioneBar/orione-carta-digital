'use client'

import { useState } from 'react';
import MoreButton from '../MoreButton/MoreButton';
import Product from '../Product/Product';
import styles from './category.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



const Category = ({category}) => {

    const [productsVisibility, setProductVisibility] = useState(true);


  return (
    <div>
        <div className={styles.categoryContainer}>
            <h2 className={styles.category}>{category?.name}</h2>
            {productsVisibility ?
                <div className={styles.icon} onClick={() => setProductVisibility(!productsVisibility)}>
                    <KeyboardArrowUpIcon color='inherit' fontSize='inherit' />
                </div>
                :
                <div className={styles.icon} onClick={() => setProductVisibility(!productsVisibility)}>
                    <KeyboardArrowDownIcon color='inherit' fontSize='inherit' />
                </div>
            }
        </div>
        {category && productsVisibility && category?.products?.map((prod) => {
            return(
                <Product key={prod?._id} id={prod?._id} name={prod?.name} description={prod?.description} price={prod?.price} isActive={prod?.isActive} />
            )
        })}
        <MoreButton catId={category?._id} />
    </div>
  )
}

export default Category
