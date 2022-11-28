import "./App.css"
import React, { useState, useEffect } from "react"
import { Container } from "@mui/system"
import axios from "axios"
import LoginForm from "./components/LoginForm"
import TypeInForm from "./components/TypeInForm"
import { Button } from "@mui/material"
function App() {
  const [beData, setBeData] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8000/users/list")
      .then((res) => {
        console.log(res.data)
        setBeData(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {" "}
          Software Engineer Study Guide
          <h6>By Nelson Maldonado</h6>
          <LoginForm />
          <TypeInForm />
          {beData.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.paragraph}</p>
              </div>
            )
          })}
        </Container>
      </header>
    </div>
  )
}

export default App
