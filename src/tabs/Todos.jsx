import { Text, Form, TodoList, EditForm } from 'components';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || [],
  );
  const [filter, setFilter] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    setTodos([...todos, { text, id: nanoid() }]);
  };

  const deleteTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const changeFilter = event => {
    setFilter(event.target.value.trim());
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleEdit = todo => {
    setIsEditing(!isEditing);

    setCurrentTodo(todo);
  };

  const cancelUpdate = () => {
    setIsEditing(!isEditing);
    setCurrentTodo({});
  };

  const updateTodos = text => {
    if (text === currentTodo.text) {
      return;
    }

    setTodos(
      todos.map(todo =>
        todo.id === currentTodo.id ? { ...currentTodo, text } : todo,
      ),
    );

    cancelUpdate();
  };
  return (
    <>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo.text}
          onUpdateTodo={updateTodos}
          onCancel={cancelUpdate}
        />
      ) : (
        <Form onSubmit={addTodo} />
      )}
      <Filter changeFilter={changeFilter} />
      {todos.length > 0 ? (
        <TodoList
          todos={filteredTodos}
          onEditing={handleEdit}
          deleteTodo={deleteTodo}
        />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
