import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import {useState} from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleDeletedTask(deletedTaskText) {
    setTask(tasks.filter((task) => task.test !== deletedTaskText ));
  }

  function handleAddTask(addTaskText) {
    setTask([...tasks, addTaskText]);
  }
  const visibleTasks = tasks.filter((task) => (
    category === "All" || task.category === category
  ))

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES.filter((category) => category !== "ALL")} onTaskFormSubmit={handleAddTask}/>
      <TaskList deleteTask = {handleDeletedTask} tasks ={visibleTasks}/>
    </div>
  );
}

export default App;