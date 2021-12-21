import { Banner } from "../../modules/banner/banner";
import { Card } from "../../modules/card/card";
import { Footer } from "../../modules/footer/footer";
import { Header } from "../../modules/header/header";
import content from "./../../../assets/datas/cards.json";
import styles from "./home.module.css";

export const Home: React.FunctionComponent = () => {
  const cards = content.cards;

  return (
    <>
      <Header></Header>
      <main>
        <Banner></Banner>
        <div id="test" className={styles.cards}>
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                to={card.to}
                image={card.image}
                description={card.description}
                title={card.title}
                subtitle={card.subtitle}
                text={card.text}
              ></Card>
            );
          })}
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};
