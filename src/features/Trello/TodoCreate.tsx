import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// material core
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// material icons
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

// actions
import * as trelloAction from 'actions/trello.action';

import TodoForm from './TodoForm';

type IProps = {
  listId?: string;
  isLists?: boolean;
}

function TodoCreate({ listId, isLists }: IProps) {
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [title, setTitle] = useState('');

  function handleSubmit() {
    if(title === '') return;

    if(isLists) {
      ///
      dispatch(trelloAction.addList(title))
      return;
    }
    
    dispatch(trelloAction.addCard(listId, title))
    setOpenForm(false)
  }

  return (
    <div>
      {openForm ? (
        <TodoForm
          text={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          handleSubmit={handleSubmit}
          handleCloseForm={() => setOpenForm(false)}
        />
      ) : (
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<AddIcon />}
          onClick={() => setOpenForm(true)}
        >
          Add Card
        </Button>
      )}
    </div>
  )
}

export default TodoCreate
