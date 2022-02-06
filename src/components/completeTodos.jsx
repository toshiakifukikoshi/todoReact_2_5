import React from "react";

export const CompleteTodos = (props) => {
  const { todos, backToIncomplete } = props;

  return (
    <>
      <div className="complete-area">
        <p className="title">完了のTODO</p>

        {todos.map((todo, index) => {
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
};
