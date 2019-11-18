import React from "react";
import { Card, Icon } from 'antd';
import {Link} from 'react-router-dom';


const TodoItem = ({ id, type, onUpdate }) => (
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="Todo" bordered={false} style={{ width: 300 }}>
      <Card>
        <h3>{type}</h3>
      </Card>
      <Card>
        <Link to="/todos/update">
          <Icon type= "edit"/>
        </Link>
      </Card>
    </Card>
  </div>
     
);

export default TodoItem;