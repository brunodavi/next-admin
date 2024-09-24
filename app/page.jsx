import styles from './ui/homepage/homepage.module.css'

import Chart from './ui/dashboard/chart/chart';

import { FaRegUser } from "react-icons/fa";
import Transactions from './ui/dashboard/transactins/transactions';
import Footer from './ui/dashboard/footer/footer';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>Next-Admin</h1>

        <Link href='/login' className={styles.signIn}>
          <FaRegUser className={styles.icon} />
          <p className={styles.text}>Sign in</p>
        </Link>
      </header>

      <main className={styles.content}>
        <div className={styles.item}>
          <Chart />
        </div>
        <div className={styles.item}>
          <Transactions />
        </div>
        <footer className={styles.footer}>
          <Footer /> 
        </footer>
      </main>

    </div>
  )
}

export default Homepage
