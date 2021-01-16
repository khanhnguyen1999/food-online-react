import React, { memo } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

type IProps = {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleCloseForm: () => void;
}

function TodoForm({ text, onChange, handleSubmit, handleCloseForm }: IProps) {
  return (
    <div>
      <TextField
        fullWidth
        autoFocus
        id="multiline"
        label="description"
        multiline
        rows={4}
        value={text}
        variant="outlined"
        onChange={onChange}
        onBlur={handleCloseForm}
      />
      <div className="todoForm__button">
        <Button variant="contained" color="primary" onMouseDown={handleSubmit} >
          Save
        </Button>
        <Button variant="outlined" color="primary" onClick={handleCloseForm} >
          Close
        </Button>
      </div>
    </div>
  );
}

export default memo(TodoForm);
