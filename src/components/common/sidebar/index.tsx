import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CreateIcon from '@material-ui/icons/Create';
import HistoryIcon from '@material-ui/icons/History';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
const Sidebar: React.FC = () => {
  return (
    <nav>
      <ul className={'side-bar-list'}>
        <li>
          <Link to={'/'}>
            <span>
              <ListAltIcon />
            </span>
            <p>할일 목록</p>
          </Link>
        </li>

        <li>
          <Link to="/new-todo">
            <span>
              <CreateIcon />
            </span>
            <p>할일 생성</p>
          </Link>
        </li>
        <li>
          <Link to={'/calendar'}>
            <span className="material-icons">
              <CalendarTodayIcon />
            </span>
            <p>달력</p>
          </Link>
        </li>
        <li>
          <Link to={'/todo-history'}>
            <span>
              <HistoryIcon />
            </span>
            <p>수정 내역</p>
          </Link>
        </li>
        <li>
          <Link to={'/statistics'}>
            <span>
              <BarChartIcon />
            </span>
            <p>통계</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
