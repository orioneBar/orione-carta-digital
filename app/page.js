import styles from "./page.module.css";
import Section from "./ui/components/Home/Section/Section";
import Navbar from "./ui/components/Navbar/Navbar";
import Top from "./ui/components/Top/Top";



export default async function Home() {

  const res = await fetch(`${process.env.URL}/api/categories`, {
    cache: 'no-store',
    next: {
      tags: ['categories']
    }
  });

  const categories = (await res.json()).sort((a, b) => a.order - b.order);

  return (
    <main className={styles.main}>
      <Top />
      <Navbar categories={categories} />
      {categories?.map((category) => {
        return (
          <Section key={category._id} category={category} />
        )
      })}
    </main>
  );
}
