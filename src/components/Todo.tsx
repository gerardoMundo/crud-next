import { TrashIcon, XMarkIcon, CheckIcon } from "@heroicons/react/20/solid";

import { useTodosContext } from "baseUrl/context/TodosContext";
import { useState } from "react";

export const Todo = ({
  id,
  title,
  description,
  done,
}: {
  id: number;
  title: string;
  description: string;
  done: boolean;
}) => {
  const { onDeleteTodo } = useTodosContext();
  const [state, setState] = useState(done);

  const handleCheck = () => {
    setState(true);
  };

  const handleNotFinish = () => {
    setState(false);
  };

  return (
    <div
      className={`flex flex-col border-2 rounded mt-5 mb-10 mx-auto h-auto w-1/2 p-3 ${
        state ? "bg-green-200" : "bg-red-100"
      }`}
    >
      <p className=" text-indigo-600 font-bold">{title}</p>
      <p>{description}</p>
      <div className="flex mt-3 w-full gap-2 justify-end">
        <TrashIcon
          onClick={() => onDeleteTodo(id)}
          className="h-7 w-7 text-red-400  hover:text-red-600 cursor-pointer"
        />
        <CheckIcon
          onClick={handleCheck}
          className="h-7 w-7 text-indigo-500  hover:text-indigo-700 cursor-pointer"
        />
        <XMarkIcon
          onClick={handleNotFinish}
          className="h-7 w-7 text-indigo-500  hover:text-indigo-700 cursor-pointer"
        />
      </div>
    </div>
  );
};
