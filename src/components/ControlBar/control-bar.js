import React from 'react';
import './control-bar.css';

import { Icon, ICONS } from '../Icon';
import LevelButton from '../LevelButton';

const ControlBar = ({ className }) => {
  return (
    <section className={`control-bar ${className}`}>
      <button className="control-bar-button control-bar__button" type="button">
        <Icon name={ICONS.MODEL3_ICON} />
      </button>

      <button className="control-bar-button control-bar__button" type="button">
        <Icon name={ICONS.DEFROST} />
      </button>

      <button className="control-bar-button control-bar__button" type="button">
        <Icon name={ICONS.HEATER} />
      </button>

      <button className="control-bar-button control-bar__button" type="button">
        <Icon name={ICONS.SEAT} />
      </button>

      <LevelButton className="control-bar-button control-bar__button">
        <span>20</span>
        <span>&deg;</span>
      </LevelButton>

      <button className="control-bar-button control-bar__button" type="button">
        <Icon name={ICONS.FAN} />
        <span>MANUAL</span>
      </button>

      <LevelButton className="control-bar-button control-bar__button">
        <span>20</span>
        <span>&deg;</span>
      </LevelButton>

      <button className="control-bar-button control-bar__button" type="button">
        <Icon name={ICONS.SEAT} className="horizontally-flipped" />
      </button>

      <button className="control-bar-button control-bar__button" type="button">
        <Icon name={ICONS.MUSIC} />
      </button>

      <button className="control-bar-button control-bar__button" type="button">
        <Icon name={ICONS.PHONE} />
      </button>

      <LevelButton className="control-bar-button control-bar__button">
        <Icon name={ICONS.VOLUME} />
      </LevelButton>
    </section>
  );
};

export default ControlBar;
