import banner from "./../../../assets/images/banner.jpg";
import styles from "./banner.module.css";

export const Banner: React.FunctionComponent = () => {
  return (
    <div className={styles.banner}>
      <img src={banner} alt="Bannière d'un paysage de montagne" />
    </div>
  );
};
