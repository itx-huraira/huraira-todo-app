"use client";

import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";
import { useStore } from "@/store";
import { useEffect } from "react";

const Home: React.FC = () => {
  const todos = useStore((state) => state.todos);
  const fetchTodos = useStore((state) => state.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container mx-auto max-w-lg p-4">
      
      <h1 className="text-4xl text-center font-bold mb-4 mt-6">Huraira Todo App </h1>
      <TodoForm />
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      {todos.length === 0 ? (
        <p className="text-center">No Todos Found</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default Home;
