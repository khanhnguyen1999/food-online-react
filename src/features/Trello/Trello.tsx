import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// selectors
import { columnsSelector, listsSelector, cardsSelectors } from 'selectors/trello.selector';

// actions
import { onDragEndList, onDragEndCard } from 'actions/trello.action';

// components
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

function Trello() {
  const dispatch = useDispatch();
  const columns = useSelector(columnsSelector);
  const lists = useSelector(listsSelector);
  const cards = useSelector(cardsSelectors);

  // using useCallback is optional
  const onBeforeCapture = useCallback(() => {
    /*...*/
    console.log('onBeforeCapture')
  }, []);
  const onBeforeDragStart = useCallback(() => {
    /*...*/
    console.log('onBeforeDragStart')
  }, []);
  const onDragStart = useCallback(() => {
    /*...*/
    console.log('onDragStart')
  }, []);
  const onDragUpdate = useCallback(() => {
    /*...*/
    console.log('orDragUpdate')
  }, []);
  const onDragEnd = useCallback((result) => {
    // the only one that is required
    console.log(result)

    if(!result.destination) return;

    if(result.type === 'LIST') {
      dispatch(onDragEndList(result))
    }

    if(result.type === 'CARD') {
      dispatch(onDragEndCard(result))
    }
  }, [dispatch]);

  return (
    <div className="todo">
      <DragDropContext
        onBeforeCapture={onBeforeCapture}
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <Droppable droppableId="all-trello" direction="horizontal" type="LIST">
          {(provided) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="todo__container"
              >
                {columns.map((column: any, index: number) => {
                  const list = lists[column];
                  const card = list.cards.map((ele: any) => cards[ele]);
                  return (
                    <TodoList key={list.id} listId={list.id} title={list.title} index={index} cards={card} />
                  )
                })}
                 <TodoCreate isLists />
              </div>
            )
          }}
        </Droppable>
      </DragDropContext>
    </div>

    
  );
}

export default Trello
