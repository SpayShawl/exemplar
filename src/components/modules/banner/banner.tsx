import { Link } from "react-scroll";
import banner from "./../../../assets/images/banner.jpg";
import styles from "./banner.module.css";

export const Banner: React.FunctionComponent = () => {
  return (
    <div className={styles.banner}>
      <img src={banner} alt="Bannière d'un paysage de montagne" />
      <Link to="test" className={styles.mouse} smooth={true} duration={500}>
        <div className={styles.scroll}></div>
      </Link>
    </div>
  );
};
