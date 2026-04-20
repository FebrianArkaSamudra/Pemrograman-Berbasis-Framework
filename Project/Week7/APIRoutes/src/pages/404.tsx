import Link from "next/link";
import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img src="/page-not-found.png" alt="404" className={styles.error__image} />
      <h1 className={styles.error__title}>404 - Page Not Found</h1>
      <p className={styles.error__description}>
        Sorry, the page you are looking for could not be found or has been moved to another address.
      </p>
      <Link href="/" className={styles.error__button}>
        Back to Home
      </Link>
    </div>
  );
};

export default Custom404;
