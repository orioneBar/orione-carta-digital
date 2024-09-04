'use client'

import styles from './logoutButton.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'next-auth/react';



const LogoutButton = () => {
  return (
    <button className={styles.logout} onClick={() => signOut()}>
        <LogoutIcon />
        Cerrar Sesión
    </button>
  )
}

export default LogoutButton
