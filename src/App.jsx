import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/completeTodos";

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
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTODOは5個までです。消化してください。
        </p>
      )}
      　
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        todos={completeTodos}
        backToIncomplete={backToIncomplete}
      />
    </>
  );
}
