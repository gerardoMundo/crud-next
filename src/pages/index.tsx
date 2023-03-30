//import styles from 'baseUrl/styles/Home.module.css'

import { AddCategory } from "baseUrl/components/AddCategory";
import { Navbar } from "baseUrl/components/Navbar";
import { TodoList } from "baseUrl/components/TodoList";

export default function Home() {
  return (
    <div className="container-2xl">
      <Navbar />
      <AddCategory />

      <TodoList />
    </div>
  );
}
