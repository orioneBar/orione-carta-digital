'use client'

import { useState } from 'react';
import styles from './loginForm.module.css';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Logo from '../../../../public/images/orioneLogo.png';


const LoginForm = () => {

    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    });
    const [error, setError] = useState('')

    const router = useRouter();


    const handleChange = (e) => {
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
console.log(formData.get('email'))
        try {
            const res = await signIn('credentials', {
                email: formData.get('email'),
                password: formData.get('password'),
                redirect: false
            });

            if (res?.error) return setError(res.error)

            if (res?.ok) return router.push('/admin');

        } catch(err) {

            console.log(err)
            if (err) {
                setError(err.response?.data.message)
            }
        }
    }


  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <Image src={Logo} alt='logo' height={80} width={'auto'} style={{alignSelf: 'center'}} />
            <h3 className={styles.title} style={{alignSelf: 'center'}}>Ingresar</h3>
            <div className={styles.body}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Email:</label>
                        <input className={styles.input} id='email' name='email' type='email' placeholder='Enter your email' />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Password:</label>
                        <input className={styles.input} id='password' type='password' name='password' placeholder='Enter your password' />
                    </div>
                    <button className={styles.formButton}>Ingresar</button>
                    {error ? <span style={{color: 'crimson', fontSize: '12px', justifySelf: 'center'}}>{error.error}</span> : <></>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginForm
