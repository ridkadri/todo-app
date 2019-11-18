import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import Loading from './Loading';
import TodoList from './Todolist';

const GET_TODOS = gql` 
query {
    todos {
        id
        type
    }
}
`;

const TodoListContainer = () =>(
    <Query query={GET_TODOS}>
    {({loading, data}) => {
        if (loading) return <Loading/>;
        return <TodoList type={data.todos}/>
    }}
    </Query>
)

export default TodoListContainer;