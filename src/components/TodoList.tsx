import { ClipboardText, PlusCircle } from "@phosphor-icons/react";

import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

export interface TaskProps {
  id: number;
  task: string;
  completed: boolean;
}

export default function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Estudar React",
      completed: true,
    },
    {
      id: 2,
      task: "Estudar TypeScript",
      completed: false,
    },
    {
      id: 3,
      task: "Estudar Node.js",
      completed: false,
    },
  ]);

  // const [completedTask, setCompletedTasks] = useState([]);

  function updateTask() {}
  function removeTask(id: number) {
    const newTaskList = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(newTaskList);
  }
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
          Tarefas criadas <span>{tasks.length}</span>
        </h2>

        <h2 className={styles.done}>
          Concluídas <span>2 de 5</span>
        </h2>
      </header>

      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => {
            return (
              <TodoItem
                isChecked={task.completed}
                updateTask={updateTask}
                removeTask={removeTask}
                key={task.id}
                data={task}
              />
            );
          })}
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
