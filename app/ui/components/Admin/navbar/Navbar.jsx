'use client'

import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';
import { Person } from '@mui/icons-material';
import SegmentIcon from '@mui/icons-material/Segment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';




const Navbar = () => {


  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <SegmentIcon /> 
        <div className={styles.title}>Productos</div>
      </div>
    </div>
  )
}

export default Navbar
