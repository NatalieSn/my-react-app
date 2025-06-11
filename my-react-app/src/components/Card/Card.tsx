import styles from '../../assets/styles/Section-Reviews.module.css';

interface CardProps {
  id: number;
  text: string;
  img: string;
  author: string;
  artist: string;
}

export const Card = ({ id, text, img, author, artist }: CardProps) => {
  return (
    <div className={`${styles.card} ${styles[`cards__review-${id}`] || ''}`}>
      <p className={styles.review__text}>{text}</p>
      <div className={styles.review__author}>
        <img
          src={img}
          alt={`Avatar of ${author}`}
          className={styles.review__img}
          onError={(e) => (e.currentTarget.src = './public/images/review1.png')}
        />
        <div className={styles.author}>
          <p className={styles.author__name}>{author}</p>
          <p className={styles.author__artist}>{artist}</p>
        </div>
      </div>
    </div>
  );
};