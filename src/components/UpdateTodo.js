import React from "react";
import Loading from './Loading';
import {useMutation, useQuery} from '@apollo/react-hooks';
import { UPDATE_TODO, GET_TODOS} from '../queries/queries';



const UpdateTodo = () => {
    const { loading, error, data } = useQuery(GET_TODOS);
    const [updateTodo] = useMutation(UPDATE_TODO);
  
    if (loading) return <Loading/>;
    if (error) return `Error! ${error.message}`;
  
    return data.todos.map(({ id, type }) => {
      let input;
  
      return (
                <div key={id}>
                    <h2>Update Todo</h2>
                    <p>{type}</p>
                    <form
                        onSubmit={e => {
                        e.preventDefault();
                        updateTodo({ variables: { id, type: input.value } });
                            input.value = '';
                        }}
                        >
                        <input ref={node => { input = node;
                         }}
                        />
                        <button type="submit">Update Todo</button>
                    </form>
                </div>
            );    
        });
    }
export default UpdateTodo;