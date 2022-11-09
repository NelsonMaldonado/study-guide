import { Container } from "@mui/system"
import React from "react"
import { Button } from "@mui/material"
const Form = () => {
  return (
    <div>
      <Container>
        <form>
          <input placeholder="Email Address*" />
        </form>
        <form>
          <input placeholder="Password*" />
        </form>
        <br />
        <Button variant="contained">Login</Button>
      </Container>
    </div>
  )
}

export default Form
