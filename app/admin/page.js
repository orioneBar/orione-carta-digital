import styles from '../ui/components/Admin/admin.module.css';
import Category from '../ui/components/Admin/Category/Category';
import BasicModal from '../ui/components/Admin/Modal/Modal';


export default async function Admin() {

  const res = await fetch(`${process.env.URL}/api/categories`, {
    cache: 'no-store',
    next: {
      tags: ['categories']
    }
  });

  const categories = await res.json();

  

  return (
    <main className={styles.main}>
      <div className={styles.categories}>
        {categories?.map((cat) => {
          return(
            <Category key={cat._id} category={cat} />
          )
        })}
      </div>
      <BasicModal content={<button className={styles.button}>+ Agregar Categoría</button>} />
    </main>
  );
}

