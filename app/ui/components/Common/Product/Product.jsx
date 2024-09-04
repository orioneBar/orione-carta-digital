import styles from './product.module.css';



const Product = ({id, name, price, description}) => {


  return (
    <div className={styles.product}>
        <div className={styles.top}>
            <h3 className={styles.name}>{name}</h3>
            <h3 className={styles.price}>{price > 0 && `$ ${price}`}</h3>
        </div>
        <div className={styles.bottom}>
            <h4 className={styles.description}>{description}</h4>
        </div>
    </div>
  )
}

export default Product
