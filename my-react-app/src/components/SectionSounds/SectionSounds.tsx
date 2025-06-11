import { useEffect, useState } from 'react';
import '../../assets/styles/swiper-bundle.min.css';
import '../../assets/styles/swiper-bundle.min.js';
import '../../assets/styles/SectionSounds.css';
import '../../assets/styles/Container.css';

// Declare Swiper globally
declare const Swiper: any;

export const SectionSounds = () => {
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
        swiper.destroy(true, true);
      };
    } catch (err) {
      setError('Failed to initialize Swiper. Please try again later.');
      console.error('Swiper initialization error:', err);
    }
  }, []);

  if (error) {
    return (
      <section className="section-sounds">
        <div className="container">
          <p className="container__caption">SOUNDS</p>
          <h2 className="container__slogan">
            Find your <span className="slogan_colored">sound</span>
          </h2>
          <p className="container__text">{error}</p>
          <button className="container__button" aria-label="Try royalty-free sound samples">
            TRY SOUNDS
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section-sounds">
      <div className="container">
        <p className="container__caption">SOUNDS</p>
        <h2 className="container__slogan">
          Find your <span className="slogan_colored">sound</span>
        </h2>
        <p className="container__text">
          Preview and download millions of royalty-free samples from top producers,
          artists, and sound designers. Available on desktop, web, and mobile.
        </p>
        <button className="container__button" aria-label="Try royalty-free sound samples">
          TRY SOUNDS
        </button>
      </div>
      <div className="swiper" role="region" aria-label="Sound samples carousel">
        <div className="swiper-wrapper">
          <img
            src="/images/sounds_img.png"
            alt="Sound samples preview"
            className="swiper-slide"
            onError={(e) => (e.currentTarget.src = '/images/fallback.png')}
          />
          <img
            src="/images/screen.jpg"
            alt="Sound design interface"
            className="swiper-slide"
            onError={(e) => (e.currentTarget.src = '/images/fallback.png')}
          />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};