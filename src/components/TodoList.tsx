import { ClipboardText, PlusCircle } from "@phosphor-icons/react";

import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";
import { ChangeEvent, useState, FormEvent, useEffect } from "react";

export interface TaskProps {
  id: number;
  task: string;
  completed: boolean;
}

export default function TodoList() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [newTask, setNewTask] = useState("");

  const [completedTasks, setCompletedTasks] = useState<TaskProps[]>([]);

  function updateTask(id: number, value: boolean) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  function removeTask(id: number) {
    const newTaskList = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(newTaskList);
  }

  function handleCreateTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleSubmitTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTaskItem = {
      id: Math.random(),
      task: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskItem]);
    setNewTask("");
  }

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed);
    setCompletedTasks(completedTasks);
  }, [tasks]);
  return (
    <main className={styles.todoList}>
      <form onSubmit={handleSubmitTask} className={styles.form}>
        <input
          value={newTask}
          onChange={handleCreateTask}
          placeholder="Adicione uma nova tarefa"
          type="text"
        />
        <button type="submit">
          Criar <PlusCircle size={20} weight="bold" />
        </button>
      </form>

      <header className={styles.header}>
        <h2 className={styles.created}>
          Tarefas criadas <span>{tasks.length}</span>
        </h2>

        <h2 className={styles.done}>
          Concluídas{" "}
          <span>{`${completedTasks.length} de ${tasks.length}`}</span>
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
