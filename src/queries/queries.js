import gql from 'graphql-tag';

const ADD_TODO = gql`
mutation addTodo($type: String!) {
    addTodo(type: $type) {
        id
        type
    }
}
`;

const UPDATE_TODO = gql`
mutation updateTodo($id: String!, $type:String!) {
    updateTodo(id: $id, type: $type) {
        id
        type
    }
}
`;

const GET_TODO = gql`
  query Todo($id: id!) {
    todo(id: $id) {
      id
      type
    }
  }
`;

const GET_TODOS = gql` 
query {
    todos {
        id
        type
    }
}
`;

export {ADD_TODO, UPDATE_TODO, GET_TODOS, GET_TODO};