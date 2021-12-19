import { Banner } from "../../modules/banner/banner";
import { Card } from "../../modules/card/card";
import content from "./../../../assets/datas/cards.json";
import styles from "./home.module.css";

export const Home: React.FunctionComponent = () => {
  const cards = content.cards;
  console.log(cards);
  return (
    <main>
      <Banner></Banner>
      <div className={styles.cards}>
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              image={card.image}
              description={card.description}
            ></Card>
          );
        })}
      </div>
    </main>
  );
};
