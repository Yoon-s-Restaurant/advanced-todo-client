import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
const Sidebar: React.FC = () => {
  return (
    <aside className={'side-bar'}>
      <nav>
        <ul className={'side-bar-list'}>
          <li>
            <Link to={'/'}>
              {/*<span className="material-icons">notes</span>*/}
              <p>할일 목록</p>
            </Link>
          </li>

          <li>
            <Link to="/new-todo">
              {/*<span className="material-icons">create</span>*/}
              <p>할일 생성</p>
            </Link>
          </li>
          <Link to={'/todo-history'}>
            <li>
              {/*<span className="material-icons">create</span>*/}
              <p>수정 내역</p>
            </li>
          </Link>
          <li>
            <Link to={'/statistics'}>
              {/*<span className="material-icons">create</span>*/}
              <p>통계</p>
            </Link>
          </li>
          <li>
            <Link to={'/calendar'}>
              {/*<span className="material-icons">create</span>*/}
              <p>달력</p>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
