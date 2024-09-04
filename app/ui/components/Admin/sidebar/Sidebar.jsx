import MenuLink from './menuLink/MenuLink';
import styles from './sidebar.module.css';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Link from 'next/link';
import LogoutButton from './LogoutButton/LogoutButton';




const menuItems = [
  {
    title: "Productos",
    path: "/productos",
    icon: <SpaceDashboardIcon />,
  },
];



const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.link}>
          {/* <Image src={CartifyLogo} width={36} height={36} alt='logo' /> */}
          <h1 className={styles.title}>ORIONE</h1>
      </Link>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
            <MenuLink item={cat} key={cat.title} />
        ))}
      </ul>
      <div className={styles.logoutContainer}>
        <LogoutButton />
      </div>
    </div>
  )
}

export default Sidebar
