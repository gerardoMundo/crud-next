export interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}
export interface Todos {
  addTodo: () => void;
  todos: Todo[];
}
export interface Target {
  value: string;
  name: string;
}
