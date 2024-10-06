import { Text } from 'components';
import style from './TodoListItem.module.css';
import {RiDeleteBinLine} from 'react-icons/ri';

export const TodoListItem = ({id, text, count, deleteTodo}) => {
  return <div className={style.box}>
  <Text textAlign="center" marginBottom="20">
    TODO #{count}
  </Text>
  <Text>{text}</Text>
  <button className={style.deleteButton} type="button" onClick={() => deleteTodo(id)}>
    <RiDeleteBinLine size={24} />
  </button>
</div>;
};
