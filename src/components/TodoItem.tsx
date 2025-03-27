import { Trash } from "@phosphor-icons/react";
import styles from "./TodoItem.module.css";

export default function TodoItem() {
  return (
    <li className={styles.todoItem}>
      <input id="1" type="checkbox" />
      <label htmlFor="1">estudar</label>
      <button title="excluir tarefa">
        <Trash />
      </button>
    </li>
  );
}
