import { useState } from "react";
import { useTodosContext } from "baseUrl/context/TodosContext";
import { Target } from "baseUrl/interfaces/todoInterface";

export const AddCategory = () => {
  const { addTodo } = useTodosContext();

  const [todo, setTodo] = useState<any>({});

  const onInputChange = ({ target }: { target: Target }) => {
    const { name, value }: { name: string; value: string } = target;

    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const onAddTodo = (e: any) => {
    e.preventDefault();
    if (todo.title == undefined || todo.description == undefined) return;

    addTodo(todo.title, todo.description);
  };

  return (
    <div>
      <form action="submit" onSubmit={onAddTodo}>
        <label className="block w-3/4  mx-auto my-4" htmlFor="add">
          Puedes agregar el título
        </label>
        <input
          id="add"
          className="block w-3/4 p-2 mx-auto my-4 focus:ring focus:ring-indigo-600 border outline-none"
          placeholder="Añade una nueva tarea"
          type="text"
          onChange={onInputChange}
          name="title"
        />
        <label className="block w-3/4  mx-auto my-4" htmlFor="add">
          Agrega la descripción
        </label>
        <textarea
          placeholder="Una descripción..."
          className="block w-3/4 p-2 mx-auto my-4 focus:ring focus:ring-indigo-600 border outline-none"
          name="description"
          id="description"
          onChange={onInputChange}
          cols={30}
          rows={10}
        ></textarea>
        <button
          type="submit"
          className="block w-2/4 mx-auto bg-indigo-500 text-white p-1.5 rounded hover:bg-indigo-700"
        >
          Agregar nueva tarea
        </button>
      </form>
    </div>
  );
};
