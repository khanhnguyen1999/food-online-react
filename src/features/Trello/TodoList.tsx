import { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

// material core
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';

// material icons
import DeleteIcon from '@material-ui/icons/Delete';

// types
import { ICard } from 'models/ITrello';

// components
import TodoCard from './TodoCard';
import TodoCreate from './TodoCreate';

type IProps = {
  index: number;
  listId: string;
  title: string
  cards: ICard[]
}

function TodoList({ index, listId, title, cards }: IProps) {
  const [isEditing, setIsEditting] = useState<boolean>(false);
  const [listTitle, setListTitle] = useState<string>(title);

  return (
    <Draggable draggableId={String(listId)} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="todoList"
        >
          <Droppable droppableId={String(listId)} type="CARD">
            {(providedDrop) => {
              return (
                <div
                  {...providedDrop.droppableProps}
                  ref={providedDrop.innerRef}
                  className="todoList__content"
                >
                  <div className="todoList__head">
                    {isEditing ? (
                      <TextField 
                        id="title" 
                        fullWidth 
                        label="Title" 
                        size="small" 
                        variant="outlined" 
                        autoFocus
                        style={{ height: 46}}
                        onBlur={() => setIsEditting(false)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setListTitle(e.target.value)}
                        value={listTitle}
                      />

                    ) : (
                      <>
                        <div className="todoList__head__title" onClick={() => {
                          setIsEditting(true);
                        }}>
                          {title}
                        </div>
                        <Tooltip title="Delete">
                          <IconButton color="inherit" aria-label="upload picture" component="span" size="small">
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </>
                    )}
                  </div>
                  <div
                    {...providedDrop.droppableProps}
                      ref={providedDrop.innerRef}
                      className="todoList__content"
                  >
                    {cards.map((card, index) => {
                      return (
                        <TodoCard 
                          key={card.id}
                          index={index}
                          cardId={card.id}
                          title={card.title}
                          listId={listId}
                        />
                      )
                    })}
                  </div>
                  <div>
                    <TodoCreate listId={listId} />
                  </div>
                </div>
              )
            }}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export default TodoList
