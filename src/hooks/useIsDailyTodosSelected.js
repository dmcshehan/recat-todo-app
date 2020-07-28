import { useSelector } from "react-redux";

export default function useIsLoggedIn() {
  const { selected } = useSelector((state) => state.todoList);
  if (selected) {
    const { title } = selected;
    return title === "Daily Todos" ? true : false;
  } else {
    return false;
  }
}
