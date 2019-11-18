import React from 'react';

import {HashRouter, Route} from 'react-router-dom';
import TodoList from './components/Todolist/Todolist';
import AddTodo from './components/AddTodo';
import UpdateTodo from './components/UpdateTodo';
import { Layout, Breadcrumb } from 'antd';


const { Header, Content, Footer } = Layout;

function App() {
  return(
    <div className="App">
    <Layout className="layout">
    <Header>
      <div className="logo" />
     <h1 style={{color: "white"}}>TO DO App</h1>
     
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
        <Breadcrumb.Item><a href="/create">Create</a></Breadcrumb.Item>
        <Breadcrumb.Item><a href="/update">Update</a></Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <HashRouter>
      <Route exact path="/" component={TodoList}/>
      <Route exact path="/todos/new" component={AddTodo} />
      <Route exact path="/todos/:id" 
        render={props => {
        return <UpdateTodo todo ={{id: props.match.params.id}} />;
          }}
        />  
        </HashRouter>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>TO DO APP ©2019 Created by RID</Footer>
  </Layout>
      
      </div>
    
  );
}
export default App;