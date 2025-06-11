import { useFetch } from '../../hooks/use-fetch';
import { Card } from '../Card/Card';
import { Review } from '../../types';
import '../../assets/styles/Section-Reviews.module.css';

interface CardListProps {
  limit?: number;
}

interface ApiComment {
  id: number;
  body: string;
  email: string;
}

const API_URL = 'https://jsonplaceholder.typicode.com/comments';

export const CardList = ({ limit = 4 }: CardListProps) => {
  const { data, status, error } = useFetch<ApiComment[]>(`${API_URL}?_limit=${limit}`);

  const cards: Review[] = data
    ? data.map((comment, index) => ({
        id: comment.id,
        text: comment.body,
        img: `/images/review${(index % 4) + 1}.png`,
        author: comment.email,
        artist: 'Artist',
      }))
    : [];

  if (status === 'LOADING') {
    return <div className="loading">Loading reviews...</div>;
  }

  if (status === 'ERROR') {
    return <div className="error">{error || 'Failed to load reviews.'}</div>;
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