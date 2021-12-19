import styles from "./card.module.css";

type Props = {
  image: string;
  description: string;
};

export const Card: React.FunctionComponent<Props> = ({
  image,
  description,
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.illustration} src={image} alt={description} />
      <div className={styles.content}></div>
    </div>
  );
};
