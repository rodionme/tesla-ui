import React from 'react';
import './sidebar.css';

import TopInfoIcons from '../TopInfoIcons';
import Speedometer from '../Speedometer';
import DrivingInfo from '../DrivingInfo';
import ActionIcons from '../ActionIcons';
import Pagination from '../Pagination';

const Sidebar = ({ className }) => {
  return (
    <aside className={`main-sidebar ${className}`}>
      <TopInfoIcons className="main-sidebar__top-info-icons" />
      <Speedometer className="main-sidebar__speedometer" />
      <DrivingInfo className="main-sidebar__driving-info" />
      <ActionIcons className="main-sidebar__action-icons" />
      <Pagination className="main-sidebar__pagination" />
    </aside>
  );
};

export default Sidebar;
