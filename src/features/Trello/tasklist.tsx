import React, { Component } from "react";
import Column from "./column";
import { DragDropContext } from "react-beautiful-dnd";

export default class TaskList extends Component {
  state = initialData;

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log("on drag end", result);

    // CHECKS TO SEE IF NO DESTINATION OR THE SAME PLACE
    if (!destination) {
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // RETRIEVE COLUMN FROM THE STATE
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];
    // IF IT IS IN THE SAME COLUMN
    if (start === finish) {
      // CREATE NEW ARRAY FOR TASKIDS ARRAY WITHOUT MUTATING
      const newTaskIds = Array.from(start.taskIds);

      // REMOVE ONE ITEM FROM THE SOURCE
      newTaskIds.splice(source.index, 1);
      // REMOVE NOTHING IN DESTINATION INDEX AND INSERT THE DRAGGABLE ID
      newTaskIds.splice(destination.index, 0, draggableId);

      // CREATE NEW COLUMNS WITH NEW TASKIDS ARRAY
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      // PUT INTO A NEW PICTURE OF THE STATE
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          // JUST OVERWRITES THE ONE COLUMN ID
          [newColumn.id]: newColumn
        }
      };

      this.setState(newState);
      return;
    }

    // PRETTY MUCH SIMILAR TO THE ABOVE FLOW, BUT NEED TO CONSIDER FROM DIFFERENT COLUMNS 9START AND FINISH ARRAYS ARE DIFFERENT
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        // JUST OVERWRITES THE COLUMN IDS
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState(newState);
  };

  render() {
    return (
      <>
        <h1 className="mb-0">Trello Board</h1>
        <div style={{ display: "flex" }}>
          <DragDropContext
            onDragEnd={this.onDragEnd}
          >
            {this.state.columnOrder.map((columnId) => {
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(
                (taskId) => this.state.tasks[taskId]
              );

              return <Column key={column.id} column={column} tasks={tasks} />;
            })}
          </DragDropContext>
        </div>
      </>
    );
  }
}
