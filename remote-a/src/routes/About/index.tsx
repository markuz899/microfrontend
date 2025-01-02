import { Button, Modal } from "@nyp/tenantuikit";
import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import Layout from "../../containers/Layout";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function About({ title }: { title?: string }) {
  const theme = useTheme();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        setTodos(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout>
      <div>About Remote A - {title}</div>
      <div>
        <h1 style={{ color: theme.colors.warning }}>Todo List</h1>
        <Modal
          onClickOther
          title="Example"
          render={() => <div style={{ color: theme.colors.dark }}>CONTENT MODAL</div>}
        >
          <Button kind="inverse-primary">TEST MODAL</Button>
        </Modal>
        <ul>
          {todos.map((todo: Todo) => (
            <li key={todo.id}>
              <strong>{todo.title}</strong> - {todo.completed ? "Completed" : "Pending"}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default React.memo(About);
