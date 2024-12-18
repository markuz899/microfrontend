import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import { useTheme } from "styled-components";
import { Button, Modal } from "@nyp/tenantuikit";

function Home({ title }) {
  return (
    <div>
      <Navbar />
      <p>Home Remote A - {title}</p>
    </div>
  );
}

function About({ title }) {
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
    <div>
      <Navbar />
      <div>About Remote A - {title}</div>
      <div>
        <h1 style={{ color: theme.colors.warning }}>Todo List</h1>
        <Modal
          onClickOther
          title="Example"
          render={() => (
            <div style={{ color: theme.colors.dark }}>CONTENT MODAL</div>
          )}
        >
          <Button kind="inverse-primary">TEST MODAL</Button>
        </Modal>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.title}</strong> -{" "}
              {todo.completed ? "Completed" : "Pending"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Contact({ title }) {
  return (
    <div>
      <Navbar />
      <p>Contact Remote A - {title}</p>
    </div>
  );
}

function AppRoutes({ title }) {
  return (
    <Routes>
      <Route path="/" element={<Home title={title} />} />
      <Route path="about" element={<About title={title} />} />
      <Route path="contact" element={<Contact title={title} />} />
    </Routes>
  );
}

export default AppRoutes;
