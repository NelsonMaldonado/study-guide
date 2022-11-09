import "./App.css"
import { Container } from "@mui/system"

import LoginForm from "./components/LoginForm"
import TypeInForm from "./components/TypeInForm"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {" "}
          Software Engineer Study Guide
          <h6>By Nelson Maldonado</h6>
          <LoginForm />
          <TypeInForm />
        </Container>
      </header>
    </div>
  )
}

export default App
