import styles from './login.module.scss'

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.titleWrap}>
        <h1>MIDDLE</h1>
      </div>
      <form className={styles.loginForm}>
        <label>
          <span>전화번호, 사용자 이름 또는 이메일</span>
          <input type='text' />
        </label>
        <label>
          <span>비밀 번호</span>
          <input type='text' />
        </label>
        <button type='submit'>로그인</button>
      </form>
      <div className='gr27e'>
        <div className=''>
          <p className=''>
            계정이 없으신가요?{' '}
            <a>
              <span className=''>가입하기</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Login
