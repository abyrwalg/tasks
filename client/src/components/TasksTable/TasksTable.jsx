import React from 'react';
import { Table, Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function TasksTable(props) {
  function sortHandler(event) {
    console.log(event.target);
  }

  return (
    <div>
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell onClick={sortHandler} sorted="ascending">
              Задача
            </Table.HeaderCell>
            <Table.HeaderCell>Срок выполнения</Table.HeaderCell>
            <Table.HeaderCell>Пользователь</Table.HeaderCell>
            <Table.HeaderCell>Статус</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.data.map(item => (
            <Table.Row key={item._id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.completed ? 'Выполнена' : 'Не выполнена'}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination />
    </div>
  );
}

export default TasksTable;
