import { ErrorOutline } from '@mui/icons-material'
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Tooltip
} from '@mui/material'
import { ChangeEvent } from 'react'

import { useStore } from '@/store/useStore'

const VariableFontFilter = () => {
  const { variableOnly, setVariableOnly } = useStore()

  const handleVariableFontChange = (
    _event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setVariableOnly(checked)
  }

  return (
    <Box display="flex" alignItems="center" height="100%">
      <FormControlLabel
        control={
          <Checkbox
            checked={variableOnly}
            onChange={handleVariableFontChange}
          />
        }
        label="Show only variable fonts"
      />
      <Tooltip title="You can use these fonts to create custom styles">
        <IconButton size="large">
          <ErrorOutline />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default VariableFontFilter
