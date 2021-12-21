import { Link } from "react-router-dom";
import styles from "./card.module.css";

type Props = {
  to?: string;
  image: string;
  description: string;
  title: string;
  subtitle?: string;
  text?: string;
};

export const Card: React.FunctionComponent<Props> = ({
  to = "/",
  image,
  description,
  title,
  subtitle = "",
  text = "",
}) => {
  return (
    <Link to={to} className={styles.card}>
      <img className={styles.illustration} src={image} alt={description} />
      <div className={styles.content}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{text}</p>
        <div className="cover-bar"></div>
      </div>
    </Link>
  );
};
