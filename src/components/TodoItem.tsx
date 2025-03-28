import { Trash } from "@phosphor-icons/react";
import styles from "./TodoItem.module.css";
import { TaskProps } from "./TodoList";
import { useState } from "react";

interface TodoItemProps {
  data: TaskProps;
  updateTask: (id: number, isChecked: boolean) => void;
  removeTask: (id: number) => void;
  isChecked: boolean;
}

export default function TodoItem({
  data,
  removeTask,
  updateTask,
  isChecked,
}: TodoItemProps) {
  function handleRemoveTask() {
    removeTask(data.id);
  }

  function handleUpdateTask() {
    setDone(!done);
    updateTask(data.id, !isChecked);
  }

  const [done, setDone] = useState(false);

  return (
    <li className={styles.todoItem}>
      <input
        onChange={handleUpdateTask}
        checked={done}
        id={`${data.id}`}
        type="checkbox"
      />
      <label htmlFor={`${data.id}`}>{data.task}</label>
      <button title="excluir tarefa" onClick={handleRemoveTask}>
        <Trash />
      </button>
    </li>
  );
}
