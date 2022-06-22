import styles from './login.module.scss'

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h1>MIDDLE</h1>
      <form className={styles.loginForm}>
        <input type='text' placeholder='id' />
        <input type='text' placeholder='pw' />
        <button type='submit'>로그인</button>
      </form>
    </div>
  )
}
export default Login
