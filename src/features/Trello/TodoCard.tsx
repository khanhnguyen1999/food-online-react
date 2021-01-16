import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

// material core
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

// material icons
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { memo } from 'react';

// actions
import * as trelloAction from 'actions/trello.action';

// components
import TodoForm from './TodoForm';

type IProps = {
  index: number;
  cardId:string;
  title: string;
  listId: string;
}

const TodoCard = ({ index, cardId, title, listId }: IProps) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setCardText] = useState(title);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCardText(e.target.value);
  }

  function handleSubmit() {
    dispatch(trelloAction.changeTitleCard(cardId, cardText));
    setIsEditing(false)
  }

  function renderCard() {
    return (
      <Card className="todoCard">
        <CardContent>
          <Typography variant="body2" component="div">
            {title}
          </Typography>
          <div className="todoCard__button">
            <Tooltip title="Edit">
              <IconButton color="inherit" component="span" size="small">
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton color="inherit" component="span" size="small">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </CardContent>
      </Card>
    )
  }

  function renderTextArea() {
    return (
      <TodoForm
        text={cardText}
        onChange={onChange}
        handleSubmit={handleSubmit}
        handleCloseForm={() => setIsEditing(false)}
      />
    )
  }

  return (
    <Draggable draggableId={String(cardId)} index={index}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="todoCard__container"
            onDoubleClick={() => setIsEditing(true)}
          >
            {isEditing ? renderTextArea() : renderCard()}
          </div>
        );
      }}
    </Draggable>
  )
}

export default memo(TodoCard)