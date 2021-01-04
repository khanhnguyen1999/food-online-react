import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Task from './task.jsx'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
    margin: 10px;
    border: 1px solid lightgrey;
    border-radius: 0.5rem;
    width: 25%;

    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 10px;
    margin: 0 0 15px;
`;
const TaskList = styled.div`
    padding: 10px;
    flex-grow: 1;
    min-height: 100px;
    border-radius: 0 0 0.5rem 0.5rem;
`;

export default class Column extends Component {
  static propTypes = {
    column: PropTypes.object,
    tasks: PropTypes.array,
  }

  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                background: snapshot.isDraggingOver ? 'lightblue' : 'white',
                ...provided.droppableProps.style
              }}
            >
              {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    )
  }
}
