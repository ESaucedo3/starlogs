import { Link } from "react-router-dom";
import Login from "./Login";
import { useEffect, useState } from 'react';

export function Navbar() {

  const [theme, setTheme] = useState('')

  useEffect(() => {
    const theme = localStorage.getItem('theme') || document.documentElement.getAttribute('data-bs-theme') || 'light'
    setTheme(theme)
    document.documentElement.setAttribute('data-bs-theme', theme)
  }, [])

  function toggleTheme() {
    const newTheme = theme == 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-bs-theme', newTheme)
    setTheme(newTheme)
  }

  function ThemeToggler() {
    return (
      <button className='btn' onClick={toggleTheme} title='Toggle light/dark mode'>
        <i className={`text-white mdi ${theme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'}`}></i>
      </button>
    )
  }


  return (
    <nav className="navbar navbar-expand-lg px-3">
      <Link className="navbar-brand" to={''}>
        <h3 className="brand-title"><strong>STARLOGS</strong></h3>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-md-end" id="navbarText">
        <div className='d-flex gap-2'>
          <Login />
        </div>
      </div>
      
    </nav >
  )
}