import Product from '../../Common/Product/Product';
import styles from './section.module.css';



const Section = ({category}) => {

    const products = category?.products;


  return (
    <div className={`${styles.section} 
        ${category.name === 'Principales' ? styles.mains : ''}
        ${category.name === 'Tragos' ? styles.drinks : ''}
        ${category.name === 'Ensaladas' ? styles.salads : ''}
    `}>
        <div className={styles.scrollOffset}  id={`${category?.name}`} />
        <h2 className={styles.mainTitle}>{category?.name}</h2>
        <div className={`${styles.products}`}>
            {products?.map((product) => {
                if (product.isActive) {
                    return(
                        <Product key={product?._id} name={product?.name} price={product?.price} description={product?.description} />
                    )
                }
            })}
        </div>
    </div>
  )
}

export default Section
