
import { Draggable } from 'react-beautiful-dnd';

// material core
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// material icons
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { memo } from 'react';

type IProps = {
  index: number;
  cardId:string;
  title: string;
  listId: string;
}

const TodoCard = ({ index, cardId, title, listId }: IProps) => {
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

  return (
    <Draggable draggableId={String(cardId)} index={index}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="todoCard__container"
          >
            {renderCard()}
          </div>
        );
      }}
    </Draggable>
  )
}

export default memo(TodoCard)