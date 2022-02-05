import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";

export default function App() {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setComplaeteTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (todoText) {
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
      setTodoText("");
    }
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const inComplete = [...incompleteTodos];
    inComplete.splice(index, 1);
    setIncompleteTodos(inComplete);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setComplaeteTodos(newCompleteTodos);
  };

  const backToIncomplete = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setComplaeteTodos(newCompleteTodos);
    const backToIncomplete = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(backToIncomplete);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      ></InputTodo>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>

        {incompleteTodos.map((todo, index) => {
          return (
            <ul key={todo}>
              <li className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            </ul>
          );
        })}
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>

        {completeTodos.map((todo, index) => {
          return (
            <ul key={todo}>
              <li className="list-row">
                <p>{todo}</p>
                <button onClick={() => backToIncomplete(index)}>戻す</button>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
