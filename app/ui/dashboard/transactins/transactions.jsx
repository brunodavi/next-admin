import Image from "next/image";
import styles from "./transactions.module.css";

const Row = ({ name, status, date, amount }) => {
  return (
    <tr>
      <td>
        <div className={styles.user}>
          <Image
            src="/noavatar.png"
            alt="avatar"
            width={40}
            height={40}
            className={styles.userImage}
          />
          {name}
        </div>
      </td>
      <td>
        <span className={`${styles.status} ${styles[status]}`}>{status}</span>
      </td>
      <td>{date}</td>
      <td>{amount}</td>
    </tr>
  );
};

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <Row name="John Due" status="pending" date="14.02.2024" amount="$3.200" />
          <Row name="John Due" status="cancelled" date="14.02.2024" amount="$3.200" />
          <Row name="John Due" status="done" date="14.02.2024" amount="$3.200" />
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
