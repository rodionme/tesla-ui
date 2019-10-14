import React from 'react';
import './level-button.css';
import { Icon, ICONS } from '../Icon';

const LevelButton = ({ className, children }) => {
  return (
    <div className={`level-button ${className}`}>
      <button
        className="level-button__toggle level-button__toggle--up"
        type="button">
        <Icon name={ICONS.ARROW} className="vertically-flipped" />
      </button>

      <div className="level-button__indicator">{children}</div>

      <button
        className="level-button__toggle level-button__toggle--down"
        type="button">
        <Icon name={ICONS.ARROW} />
      </button>
    </div>
  );
};

export default LevelButton;
