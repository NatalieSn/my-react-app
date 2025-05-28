import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import type { CardData } from '../../Type';
import "./src/assets/styles/SectionReviews.css";
//import styles from "./src/assets/styles/Card.css";

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=4")
      .then((response) => response.json())
      .then((data) => {
        const cardsData: CardData[] = data.map((item: any) => ({
          id: item.id,
          text: item.body,
          name: item.body,
          profession: item.body,
          imgSrc: null,
        }));
        setCards(cardsData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="cards__review-${card.id}">
      {cards.map((card) => (
          <Card
            text={card.text}
            name={card.name}
            imgSrc={card.imgSrc}
            profession={card.profession}
          />
      ))}
      </div>
  );
};

export default CardList;