"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Todo } from "../interfaces/todoInterface";

const TodoContext = createContext({});

export const TodosContext = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const newTodos = JSON.parse(localStorage.getItem("todos") || "[]");

    if (newTodos.length > 0) {
      setTodos(newTodos);
    }
  }, []);

  const addTodo = useCallback(
    (title: string, description: string, done: boolean = false): void => {
      setTodos([...todos, { id: todos.length, title, description, done }]);
    },
    [todos]
  );

  const onDeleteTodo = useCallback(
    (id: number) => {
      setTodos([...todos.filter((todo: Todo) => todo.id !== id)]);
    },
    [todos]
  );

  const value = useMemo(
    () => ({ todos, addTodo, onDeleteTodo }),
    [todos, addTodo, onDeleteTodo]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodosContext = (): any => {
  return useContext(TodoContext);
};
