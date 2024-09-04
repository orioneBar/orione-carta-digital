import Image from 'next/image';
import styles from './top.module.css';
import Logo from '../../../../public/images/orioneLogo.png';
import Cover from '../../../../public/images/orioneCover.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';



const Top = () => {
  return (
    <div className={styles.container}> 
        <div className={styles.background}>
            <Image src={Cover} className={styles.cover} />
        </div>
        <Image className={styles.img} src={Logo} alt='logo' priority />
        <div className={styles.socialContainer}>
            <a href='https://www.facebook.com/orionebar' className={styles.socialLink}>
                <FacebookIcon fontSize='inherit' color='inherit' />
            </a>
            <a href='https://www.instagram.com/orione.bar' className={styles.socialLink}>
                <InstagramIcon fontSize='inherit' color='inherit' />
            </a>
            <a href='https://api.whatsapp.com/send?phone=5491126407905' className={styles.socialLink}>
                <WhatsAppIcon fontSize='inherit' color='inherit' />
            </a>
        </div>
        <h2 className={styles.bottomTitle}>RESERVAS | 4725 3838</h2>
        <Link className={styles.bottomTitle} href="#Cafetería">Ver Menú</Link>
        <Link className={styles.link} href="#Cafetería" aria-label='linkArrow'>
            <ExpandMoreIcon color="inherit" style={{fontSize: 'inherit'}} />
        </Link>
    </div>
  )
}

export default Top
