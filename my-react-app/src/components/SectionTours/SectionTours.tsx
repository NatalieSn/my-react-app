import { useEffect, useState } from 'react';
import '../../assets/styles/swiper-bundle.min.css';
import '../../swiper-bundle.min.js';
import '../../assets/styles/SectionTours.css';
import '../../assets/styles/Container.css';

interface SwiperOptions {
  direction?: string;
  loop?: boolean;
  pagination?: {
    el: string;
    clickable?: boolean;
  };
}

interface SwiperInstance {
  destroy?: (deleteInstance?: boolean, cleanStyles?: boolean) => void;
}

declare const Swiper: {
  new(selector: string, options: SwiperOptions): SwiperInstance;
};

interface SectionToursProps {
  openModal: (modalId: string) => void;
}


export const SectionTours = ({ openModal }: SectionToursProps) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof Swiper === 'undefined') {
      setError('Swiper library failed to load. Please refresh the page or try again later.');
      console.error('Swiper is not defined. Check if swiper-bundle.min.js is loaded correctly.');
      return;
    }

    try {
      const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

      return () => {
        swiper.destroy?.(true, true);
      };
    } catch (err) {
      setError('Failed to initialize Swiper. Please try again later.');
      console.error('Swiper initialization error:', err);
    }
  }, []);

  if (error) {
    return (
      <section className="section-tours" id="tours">
        <div className="container">
          <p className="container__caption">ТУРЫ</p>
          <h2 className="container__slogan">
            Отправьтесь в <span className="slogan_colored">эпическое</span> приключение
          </h2>
          <p className="container__text">{error}</p>
          <button
            className="container__button"
            id="learn-more-tours"
            onClick={() => openModal('tours-modal')}
            aria-label="Learn more about tours"
          >
            УЗНАТЬ БОЛЬШЕ
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section-tours" id="tours">
      <div className="container">
        <p className="container__caption">ТУРЫ</p>
        <h2 className="container__slogan">
          Отправьтесь в <span className="slogan_colored">эпическое</span> приключение
        </h2>
        <p className="container__text">
          Окунитесь в захватывающий мир океана! Плавайте с величественными китами, исследуйте
          яркие морские экосистемы и создайте воспоминания, которые останутся с вами навсегда.
          Наши туры подходят для всех — от новичков до опытных искателей приключений, и доступны
          в любое время года.
        </p>
        <button
          className="container__button"
          id="learn-more-tours"
          onClick={() => openModal('tours-modal')}
          aria-label="Learn more about tours"
        >
          УЗНАТЬ БОЛЬШЕ
        </button>
      </div>
      <div className="swiper" role="region" aria-label="Sound samples carousel">
        <div className="swiper-wrapper">
          <img
            src="/images/Kit-65.jpg"
            alt="Sound samples preview"
            className="swiper-slide"
          />
          <img
            src="/images/scale_1200.jpg"
            alt="Sound design interface"
            className="swiper-slide"
          />
          <img
            src="/images/1.jpg"
            alt="Sound design interface"
            className="swiper-slide"
          />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};
