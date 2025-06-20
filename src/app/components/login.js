// components/Login.js
import { useState } from 'react';
import styles from './login.module.css'; // Import the CSS module

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Login</h2>
        <form>
          <div className={styles.inputWrapper}>
            <label className={styles.label}>
              <span className={styles.required}>*</span> Email
            </label>
            <input
              className={styles.input}
              placeholder="Enter Email"
              type="email"
            />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>
              <span className={styles.required}>*</span> Password
            </label>
            <div className={styles.passwordWrapper}>
              <input
                className={styles.input}
                id="password"
                placeholder="Enter Password"
                type={passwordVisible ? 'text' : 'password'}
              />
              <span
                className={styles.toggleIcon}
                onClick={togglePasswordVisibility}
              >
                <i
                  className={`fas ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
                />
              </span>
            </div>
          </div>

          <button className={styles.loginButton} type="submit">
            Login
          </button>
          <button className={styles.googleButton} type="button">
            Login with Google <i className="fab fa-google" />
          </button>
        </form>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Dont have an account?{' '}
            <a className={styles.link} href="#">
              Sign up now
            </a>
          </p>
          <p className={styles.footerText}>
            <a className={styles.link} href="#">
              Forgot password?
            </a>
          </p>
        </div>

        <div className={styles.copyRight}>
          <span>© Cosmiron AI</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
