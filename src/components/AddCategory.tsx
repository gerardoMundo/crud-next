export const AddCategory = () => {
  return (
    <form action="submit">
      <label className="block w-3/4  mx-auto my-4" htmlFor="add">
        Puedes agregar una nueva tarea
      </label>
      <input
        id="add"
        className="block w-3/4 p-2 mx-auto my-4 focus:ring focus:ring-indigo-600 border outline-none"
        placeholder="Añade una nueva tarea"
        type="text"
      />
      <button
        type="submit"
        className="block w-2/4 mx-auto bg-indigo-500 text-white p-1.5 rounded hover:bg-indigo-700"
      >
        Agregar nueva tarea
      </button>
    </form>
  );
};
