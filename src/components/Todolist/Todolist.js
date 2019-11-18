import React from 'react';

import './Todolist.css';
import {Query} from 'react-apollo';
import {GET_TODOS} from '../../queries/queries';
import Loading from '../Loading';
import TodoItem from '../TodoItem';
import { Link } from "react-router-dom";
import {Icon} from 'antd';



const TodoList = props => (
    <Query query = {GET_TODOS}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return `Error! ${error.message}`;
        const {todos} = data;

        return (
          <div className="cards">
            {todos &&
              todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  {...todo}
                  onUpdate={id => {
                    props.history.push(`/todo/${id}`);
                  }}
                />
              ))}
          <Link to="/todos/new">
          <Icon type="plus-circle"
          style={{
            float: "right",
            fontSize: "large"
          }}
          />
          </Link>
          </div>
        );
      }}
    </Query>
 );

 export default TodoList;

