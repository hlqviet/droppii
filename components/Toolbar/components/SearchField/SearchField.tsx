import { Search } from '@mui/icons-material'
import { TextField, TextFieldProps } from '@mui/material'

const SearchField = (props: TextFieldProps) => {
  return (
    <TextField
      placeholder="Search fonts"
      fullWidth
      InputProps={{ startAdornment: <Search /> }}
      {...props}
    />
  )
}

export default SearchField
