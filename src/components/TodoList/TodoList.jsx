import { Grid, GridItem, TodoListItem } from "components";

export const TodoList = ({todos, deleteTodo}) => {
  return (
  <Grid>
  {todos.map((todo, index) => (
    <GridItem key={todo.id}>
      <TodoListItem text={todo.text} count={index + 1} deleteTodo={deleteTodo} id={todo.id}/>
    </GridItem>
  ))}
</Grid>);
};
