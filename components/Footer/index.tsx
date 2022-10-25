import styles from './index.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}></div>
      <div className={styles.detailsBox}>
        <span className={styles.detailsHeader}>Discover</span>
        <a className={styles.details}>About Us</a>
        <a className={styles.details}>Our Commitment</a>
        <a className={styles.details}>Contact</a>
      </div>
      <div className={styles.detailsBox}>
        <span className={styles.detailsHeader}>Reach Out</span>
        <a className={styles.details}>Address</a>
        <a className={styles.details}>Telephone</a>
        <a className={styles.details}>Email</a>
      </div>
    </footer>
  )
}

export default Footer