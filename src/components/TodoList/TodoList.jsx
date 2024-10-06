import { Grid, GridItem, TodoListItem } from 'components';

export const TodoList = ({ todos, deleteTodo, onEditing }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem
            text={todo.text}
            count={index + 1}
            deleteTodo={deleteTodo}
            onEditing={onEditing}
            id={todo.id}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
