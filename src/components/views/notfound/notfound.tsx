import styles from "./notfound.module.css";
import darn from "./../../../assets/images/darn.png";
import { Link } from "react-router-dom";

export const NotFound: React.FunctionComponent = () => {
  return (
    <main className={styles.notfound}>
      <div className={styles.code}>
        <h1>404</h1>
        <h2>ページが見つかりません</h2>
      </div>
      <img src={darn} alt="Kid goku embarassed" />
      <Link to="/" className={styles.back}>
        Back
      </Link>
    </main>
  );
};
