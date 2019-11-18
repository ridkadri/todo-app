import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { ADD_TODO, GET_TODOS } from '../queries/queries';


const AddTodo =() => {
  let input;
  const [addTodo] = useMutation(
    ADD_TODO,
    {
      update(cache, { data: { addTodo } }) {
        const { todos } = cache.readQuery({ query: GET_TODOS });
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos: todos.concat([addTodo]) },
        });
      }
    }
  );

  return (
      <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { type:input.value } });
          input.value = "";
        }}
      >
        <input
          placeholder="Add Todo"
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
  }
export default AddTodo;