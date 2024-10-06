import { Text, Form, TodoList } from 'components';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || [],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    setTodos([...todos, { text, id: nanoid() }]);
  };

  const deleteTodo = todoId => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  const changeFilter = (event) => {
    setFilter(event.target.value.trim());
  }

  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      <Form onSubmit={addTodo}/>
      <Filter changeFilter={changeFilter}/>
      <TodoList todos={filteredTodos}  deleteTodo={deleteTodo} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
