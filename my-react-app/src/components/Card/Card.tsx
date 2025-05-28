import React from "react";
import './src/assets/styles/Card.css'; // Подключаем стили
import type { CardProps } from '../../Type';

const Card: React.FC<CardProps> = ({ text, imgSrc, name, profession }) => {
    
  return (
    <div className="card">
      <p className="review__text">{text}</p>
      <div className="review__author">
        {imgSrc && <img src={imgSrc} alt={name} />}
        <div className="author">
          <p className="author__name">{name}</p>
          <p className="author__artist">{profession}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;