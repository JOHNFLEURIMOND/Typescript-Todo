import React, { Fragment, useState } from "react";
import ReactDom from "react-dom";

type FormElem = React.FormEvent<HTMLFormElement>;

export default function App(): JSX.Element {
  interface iMyToDos {
    text: string;
    complete: boolean;
  }

  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<iMyToDos[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  const addTodo = (text: string): void => {
    const newTodos: iMyToDos[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };
  const completeTodos = (index: number): void => {
    const newTodos: iMyToDos[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  console.log(todos);
  return (
    <Fragment>
      <h2 className="ta-c p-h200 t--intro">To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="txt-f txt-f--sm "
        />
        <button type="submit" className="btn btn--c btn--br">
          Add To-Do
        </button>
      </form>
      <section>
        {todos.map((todos: iMyToDos, index: number) => (
          <Fragment key={index}>
            <div
              style={{
                textDecoration: todos.complete ? "line-through" : "none"
              }}
              className="ta-c p-h200 t--intro"
            >
              {todos.text}
            </div>
            <button
              type="button"
              onClick={() => completeTodos(index)}
              className="btn btn--c btn--br"
            >
              {todos.complete ? "Incomplete" : "Complete"}
            </button>
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
}

const root = document.getElementById("app-root");

ReactDom.render(<App />, root);
