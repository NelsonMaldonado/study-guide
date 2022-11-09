import React, { useState } from "react"
import { Button } from "@mui/material"
import { Container } from "@mui/system"

const TypeInForm = () => {
  const [formData, setformData] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleChange = (event) => {
    setformData(event.target.value)
  }

  const handleAddTask = (event) => {
    event.preventDefault()
    setTaskItems([...taskItems, formData])
  }

  const handleClick = () => {
    console.log("task finished")
  }
  return (
    <div>
      <h1>Type in your subject</h1>
      {formData}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="Subject"
        />
        {/* <label>
          <h2> Explanation</h2>
          <textarea
            cols="30"
            rows="10"
            onChange={handleChange}
            name="paragraph"
            placeholder="In your own words, please type in a clear explanation of what this concept means"
          ></textarea>
        </label> */}
        <br></br>
        <Button type="submit">Add subject</Button>
      </form>
      <div>
        {taskItems.map((item, index) => {
          return (
            <Container key={index}>
              <Button key={index} onClick={handleClick}>
                {item}
              </Button>
            </Container>
          )
        })}
      </div>
    </div>
  )
}

export default TypeInForm
