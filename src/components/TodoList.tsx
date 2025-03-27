import { ClipboardText, PlusCircle } from "@phosphor-icons/react";

import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";
export default function TodoList() {
  const tasks = ["teste"];

  return (
    <main className={styles.todoList}>
      <form className={styles.form}>
        <input placeholder="Adicione uma nova tarefa" type="text" />
        <button type="submit">
          Criar <PlusCircle size={20} weight="bold" />
        </button>
      </form>

      <header className={styles.header}>
        <h2 className={styles.created}>
          Tarefas criadas <span>5</span>
        </h2>

        <h2 className={styles.done}>
          Concluídas <span>2 de 5</span>
        </h2>
      </header>

      {tasks.length > 0 ? (
        <ul>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
      ) : (
        <div className={styles.empty}>
          <ClipboardText size={56} />
          <p>
            Você ainda não tem tarefas cadastradas
            <br />
            <span>Crie tarefas e organize seus itens a fazer</span>
          </p>
        </div>
      )}
    </main>
  );
}
