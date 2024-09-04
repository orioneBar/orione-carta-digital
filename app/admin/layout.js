import Sidebar from '../ui/components/Admin/sidebar/Sidebar';
import styles from '../ui/components/Admin/adminLayout.module.css';
import Navbar from '../ui/components/Admin/navbar/Navbar';
import Providers from '../lib/providers';





const Layout =({children}) => {
    return (
        <Providers>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <Sidebar />
                </div>
                <div className={styles.content}>
                    <Navbar />
                    {children}
                </div>
            </div>
        </Providers>
    )
}



export default Layout