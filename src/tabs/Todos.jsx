import { Text, Form } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || [],
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    setTodos([...todos, { text, id: nanoid() }]);
  };

  console.log(todos);
  return (
    <>
      <Form onSubmit={addTodo} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
