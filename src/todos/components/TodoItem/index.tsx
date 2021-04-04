import * as React from 'react';
import { Todo } from 'todos/components/TodoList';
import './index.scss';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko.js';
import ProgressBar from 'common/components/progress';
import { Slider, Tooltip } from '@material-ui/core';
dayjs.extend(relativeTime);
dayjs.locale('ko');
interface TodoItemProps {
  data: Todo;
}

interface Props {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

function ValueLabelComponent(props: Props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
const TodoItem: React.FC<TodoItemProps> = ({ data }) => {
  const parsedDeadLine = dayjs(data.deadLine).toNow();
  return (
    <article className={'todo-item'}>
      <h3 className={'title'}>{data.title}</h3>

      <div className={'slider-wrapper'}>
        <Slider
          defaultValue={data.progress}
          // getAriaValueText={data.progress}
          ValueLabelComponent={ValueLabelComponent}
          aria-labelledby="discrete-slider-always"
          step={5}
          // valueLabelDisplay="on"
        />
      </div>
      <div className={'priority'}></div>
      <div className={'dead-line'}>{parsedDeadLine}</div>
    </article>
  );
};

export default TodoItem;
