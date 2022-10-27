import "./App.css"
import { Container } from "@mui/system"
import { Button } from "@mui/material"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {" "}
          Software Engineer Study Guides
          <br />
          <h6>By Nelson Maldonado</h6>
          <Button variant="contained">Save</Button>
          <Button variant="contained">Discard</Button>
        </Container>
      </header>
    </div>
  )
}

export default App
