import Product from '../Common/Product/Product';
import styles from './drinks.module.css';



const Drinks = () => {

    const drinksProducts = [
        {
            _id: 'ijfidof34545435',
            name: 'Chicken Fingers',
            description : "Pollo rebozado con honey mustard y salsa barbacoa. Acompañado con papas fritas",
            price: 10500,
            categoryId: "66cca0478545677980bb1547"
        },
        {
            _id: 'ijfidof34545435',
            name: 'Chicken Fingers',
            description : "Pollo rebozado con honey mustard y salsa barbacoa. Acompañado con papas fritas",
            price: 10500,
            categoryId: "66cca0478545677980bb1547"
        },
        {
            _id: 'ijfidof34545435',
            name: 'Chicken Fingers',
            description : "Pollo rebozado con honey mustard y salsa barbacoa. Acompañado con papas fritas",
            price: 10500,
            categoryId: "66cca0478545677980bb1547"
        },
    ];


  return (
    <div className={styles.container}>
        <h2 className={styles.mainTitle}>BEBIDAS</h2>
        {drinksProducts?.map((prod) => {
            return(
                <Product key={prod?._id} name={prod?.name} price={prod?.price} description={prod?.description} />
            )
        })}
    </div>
  )
}

export default Drinks
