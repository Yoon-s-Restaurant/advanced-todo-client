import * as React from 'react';
import { TextField } from '@material-ui/core';
import './index.scss';
import useInput from 'common/hooks/useInput';
const TodoForm: React.FC = () => {
  const [title, onChangeTitle] = useInput<string>('');
  const [content, onChangeContent] = useInput('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, content);
  };
  return (
    <form onSubmit={handleSubmit} className={'todo-form'}>
      <TextField
        id="standard-full-width"
        // label="Label"
        style={{ marginBottom: '2em' }}
        placeholder="제목"
        value={title}
        onChange={onChangeTitle}
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-multiline-static"
        // label="Multiline"
        style={{ width: '100%', marginBottom: '2em' }}
        multiline
        rows={4}
        placeholder={'할일 상세'}
        // defaultValue="Default Value"
        variant="outlined"
        value={content}
        onChange={onChangeContent}
      />
      <button className={'button'} type={'submit'}>
        할일 생성
      </button>
    </form>
  );
};

export default TodoForm;
