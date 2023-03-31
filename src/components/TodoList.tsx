import { useTodosContext } from "baseUrl/context/TodosContext";
import { Todo as ModelTodo } from "baseUrl/interfaces/todoInterface";
import { useEffect } from "react";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { todos } = useTodosContext();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      {todos.map((todo: ModelTodo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </div>
  );
};
