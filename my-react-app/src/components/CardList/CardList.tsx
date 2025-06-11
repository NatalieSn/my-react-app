import { useState, useEffect } from 'react';
import { Card } from '../Card/Card';
import '../../assets/styles/Section-Reviews.module.css';

interface ReviewCard {
  id: number;
  text: string;
  img: string;
  author: string;
  artist: string;
}

interface CardListProps {
  limit?: number;
}

export const CardList = ({ limit = 10 }: CardListProps) => {
  const [cards, setCards] = useState<ReviewCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((comments: Array<{ id: number; body: string; email: string }>) => {
        const mappedCards: ReviewCard[] = comments.map((comment, index) => ({
          id: comment.id,
          text: comment.body,
          img: `/images/review${(index % 4) + 1}.png`, // Cycle through review1-4.png
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
  }, [limit]);

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