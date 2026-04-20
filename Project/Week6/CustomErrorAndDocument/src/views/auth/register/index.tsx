import styles from "./index.module.css";

const Register = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.title}>Register</h1>
      <input className={styles.input} type="text" placeholder="Username" />
      <input className={styles.input} type="email" placeholder="Email" />
      <input className={styles.input} type="password" placeholder="Password" />
      <button className={styles.button}>Register</button>
    </div>
  );
};

export default Register;
