import { CheckCircle, Eye } from 'assets/svgs'
import { useState } from 'react'
import styles from './login.module.scss'

const Login = () => {
  const [idTxt, setIdTxt] = useState('')
  const [pwTxt, setPwTxt] = useState('')
  const [vaildEmail, setVaildEmail] = useState(false)
  const [showPwd, setShowPwd] = useState(false)

  const checkRgexId = (e: string) => {
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i // email regex w3c 표준 정규식이 있음
    if (regex.test(e)) {
      setVaildEmail(true)
    } else {
      setVaildEmail(false)
    }
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    checkRgexId(value)
  }
  const onBlurIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    vaildEmail && setIdTxt(e.currentTarget.value)
    // eslint-disable-next-line no-console
    console.log(idTxt)
  }
  const onBlurPwHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwTxt(e.currentTarget.value)
    // eslint-disable-next-line no-console
    console.log(pwTxt)
  }
  const onShowPw = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowPwd((_showPew) => !_showPew)
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.titleWrap}>
        <h1>MIDDLE</h1>
      </div>
      <form className={styles.loginForm}>
        <div className={styles.labelWrap}>
          <label>
            <span>전화번호, 사용자 이름 또는 이메일</span>
            <input name='id' type='text' onChange={onChangeHandler} onBlur={onBlurIdHandler} />
          </label>
          {vaildEmail ? (
            <CheckCircle
              style={{
                width: '20px',
                fill: 'darkcyan',
              }}
            />
          ) : (
            <CheckCircle
              style={{
                width: '20px',
                fill: 'red',
              }}
            />
          )}
        </div>
        <div className={styles.labelWrap}>
          <label>
            <span>비밀 번호</span>
            <input name='password' type={!showPwd ? 'password' : 'text'} onBlur={onBlurPwHandler} />
          </label>
          <button type='button' onClick={onShowPw}>
            {showPwd ? (
              <Eye
                style={{
                  display: 'inline',
                  width: '20px',
                  fill: 'darkcyan',
                }}
              />
            ) : (
              <Eye
                style={{
                  display: 'inline',
                  width: '20px',
                }}
              />
            )}
          </button>
        </div>

        <button className={styles.loginBtn} type='submit'>
          로그인
        </button>
      </form>
      <div>
        <div>
          <p>
            계정이 없으신가요? <span>가입하기</span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Login
