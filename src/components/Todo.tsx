import { TrashIcon, PencilSquareIcon } from "@heroicons/react/20/solid";

export const Todo = () => {
  return (
    <div className="flex flex-col border-2 mt-3 mx-auto h-auto w-1/2 p-3">
      <p className=" text-indigo-600 font-bold">Título</p>
      <p>Cuerpo de la tarea</p>
      <div className="flex mt-3 w-full gap-2 justify-end">
        <TrashIcon className="h-7 w-7 text-red-400  hover:text-red-600 cursor-pointer" />
        <PencilSquareIcon className="h-7 w-7 text-indigo-500  hover:text-indigo-700 cursor-pointer" />
      </div>
    </div>
  );
};
