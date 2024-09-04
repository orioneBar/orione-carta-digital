import styles from '../ui/admin.module.css';
import LoginForm from '../ui/components/Login/LoginForm';


export default function Login() {
    return (
      <main className={styles.main}>
        <LoginForm />
      </main>
    );
}
