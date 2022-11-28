import React from "react";
import TodoList from "./components/TodoList";
import ThemeButton from "./components/ThemeButton";
import { GET_THEME_MODE } from './graphql/reactiveVariables/themeVariable'
import { useQuery } from '@apollo/client'

function App() {
  const { loading, error, data } = useQuery(GET_THEME_MODE);
  if (loading) return <p>Lodaing...</p>
  if (error) return <p>Something went wrong.</p>

  return (
    <div className={`${data.themeMode ? 'light' : 'dark'}`}>
      <ThemeButton />
      <TodoList />
    </div >
  );
}

export default App;
