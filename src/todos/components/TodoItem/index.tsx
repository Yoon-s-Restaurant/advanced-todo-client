import * as React from 'react';
import { Todo } from 'todos/components/TodoList';
import './index.scss';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko.js';
import ProgressBar from 'common/components/progress';
dayjs.extend(relativeTime);
dayjs.locale('ko');
interface TodoItemProps {
  data: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ data }) => {
  const parsedDeadLine = dayjs(data.deadLine).toNow();
  return (
    <article className={'todo-item'}>
      <h3 className={'title'}>{data.title}</h3>
      <ProgressBar rate={data.progress} />
      <div className={'priority'}></div>
      <div className={'dead-line'}>{parsedDeadLine}</div>
    </article>
  );
};

export default TodoItem;
