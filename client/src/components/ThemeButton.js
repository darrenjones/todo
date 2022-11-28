import React from 'react'
import { Moon, Sun } from 'react-feather';
import { useQuery } from '@apollo/client';
import { themeMode, GET_THEME_MODE } from '../graphql/reactiveVariables/themeVariable';

const ThemeButton = () => {
  const { loading, error, data } = useQuery(GET_THEME_MODE);
  if (loading) return <p>Loading...</p>
  if (error) return <p>ERROR</p>

  const toggleMode = () => {
    themeMode(!themeMode())
  }

  return (
    <button className="theme-toggle-button" onClick={toggleMode} >
      {data.themeMode ? <Moon /> : <Sun />}
    </button>
  )
}

export default ThemeButton
