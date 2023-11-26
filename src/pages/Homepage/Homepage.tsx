import { memo } from 'react';
import './Homepage.scss';

export const Homepage: React.FC = memo(() => {
  return (
    <div className="homepage container">
      <div className="homepage__content">
        <img
          className="homepage__img"
          src={'src/assets/static/hand.png'}
          alt="3d hand and golden coins"
        />

        <div className="homepage__action">
          <h1 className="homepage__title">Who wants to be a millionare?</h1>

          <button
            className="homepage__button"
            type="button"
            aria-label="start the game"
          >
            start!
          </button>
        </div>
      </div>
    </div>
  );
});
