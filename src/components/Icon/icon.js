import React from 'react';
import PropType from 'prop-types';
import './icon.css';
import { ICONS, PATHS } from './icons';

const Icon = ({ name }) => {
  return (
    <svg
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      dangerouslySetInnerHTML={{ __html: PATHS[name] }}
    />
  );
};

Icon.propTypes = {
  name: PropType.oneOf(Object.values(ICONS)),
};

export default Icon;
