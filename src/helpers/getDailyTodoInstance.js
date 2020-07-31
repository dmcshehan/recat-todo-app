export default function getDailyTodoInstance(todoLists) {
  return todoLists.find((todoList) => todoList.title === "Daily Todos");
}
