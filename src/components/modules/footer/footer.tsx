import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <Link className={styles.link} to={"/legal"}>
          Mentions Légales |
        </Link>
        <span>| @Copyright Exemplar 2021</span>
      </div>
    </footer>
  );
};
