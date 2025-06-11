import { useState, useEffect } from 'react';
import { Card } from '../Card/Card';

interface ReviewCard {
  id: number;
  text: string;
  img: string;
  author: string;
  artist: string;
}

export const CardList = () => {
  const [cards, setCards] = useState<ReviewCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((comments: Array<{ id: number; body: string; email: string }>) => {
        const mappedCards: ReviewCard[] = comments.map((comment, index) => ({
          id: comment.id,
          text: comment.body,
          img: `/public/images/review${index + 1}.png`,
          author: comment.email,
          artist: 'Artist',
        }));
        setCards(mappedCards);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        console.error('Error:', error);
        setError('Failed to load reviews. Please try again later.');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="loading">Loading reviews...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="section-reviews__cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
          img={card.img}
          author={card.author}
          artist={card.artist}
        />
      ))}
    </div>
  );
};