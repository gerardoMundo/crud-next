import { AddCategory } from "baseUrl/components/AddCategory";
import { Navbar } from "baseUrl/components/Navbar";
import { TodoList } from "baseUrl/components/TodoList";
import { TodosContext } from "baseUrl/context/TodosContext";

export default function Home() {
  return (
    <div className="container-2xl">
      <Navbar />

      <TodosContext>
        <AddCategory />
        <TodoList />
      </TodosContext>
    </div>
  );
}
