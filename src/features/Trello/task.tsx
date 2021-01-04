import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 0.5rem;
    padding: 10px;
    margin-bottom: 10px;
`;

export default class Task extends Component {
  static propTypes = {
    task: PropTypes.object,
  }

  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            style={{
              background: snapshot.isDragging ? 'lightgreen' : 'white',
              ...provided.draggableProps.style
            }}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    )
  }
}
