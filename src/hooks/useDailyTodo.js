import { useSelector } from "react-redux";

export default function useDailyTodo() {
  const { todoLists } = useSelector((state) => state.todoList);

  return todoLists.find((todoList) => todoList.title === "Daily Todos");
}
