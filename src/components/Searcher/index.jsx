import React, { useState } from "react"
import { IconButton, Stack, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const Searcher = (props) => {
  const {setInputUser} = props

  const [valueInput, setValueInput] = useState('')

  const onSearchValueChange = (e) => {
    const inputValue = e.target.value
    setValueInput(inputValue)
  }

  const handleSubmit = () => {
    setInputUser(valueInput)
  }

  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "30px",
        width: "80%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="GitHub user"
        variant="outlined"
        placeholder="Octocat"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{ width: "90%" }}
      ></TextField>
      <IconButton
        onClick={handleSubmit}
        size="small"
        sx={{
          left: "-45px",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}

export default Searcher
