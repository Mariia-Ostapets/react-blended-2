import { Text } from 'components';
import style from './TodoListItem.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const TodoListItem = ({ id, text, count, deleteTodo, onEditing }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{count}
      </Text>
      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => deleteTodo(id)}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        className={style.editButton}
        onClick={() => onEditing({ id, text })}
        type="button"
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
