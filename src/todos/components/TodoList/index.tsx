import * as React from 'react';
import TodoItem from '../TodoItem';
import './index.scss';
const TodoList: React.FC = () => {
  return (
    <div className={'todo-list-wrapper'}>
      <div className={'header-wrapper'}>
        <h2 id="todo-list">All Todo</h2>
      </div>
      <div className={'article-wrapper'}>
        {todos.map((todo) => (
          <TodoItem key={todo.idx} data={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

export interface Todo {
  idx: number;
  title: string;
  progress: number;
  priority: 'high' | 'medium' | 'low';
  deadLine: string;
}
const todos: Todo[] = [
  {
    idx: 1,
    title: '내일은 사이드 헤더 만들기',
    progress: 20,
    priority: 'high',
    deadLine: '2021-01-25',
  },
  {
    idx: 2,
    title: '프로필 부분 작성하기',
    progress: 45,
    priority: 'high',
    deadLine: '2021-03-25',
  },
  {
    idx: 3,
    title: '블로그 만들기',
    progress: 70,
    priority: 'high',
    deadLine: '2021-04-25',
  },
  {
    idx: 4,
    title: '블로그 글쓰기',
    progress: 50,
    priority: 'high',
    deadLine: '2021-04-12',
  },
];
