import { ArrowDropDown } from '@mui/icons-material'
import {
  Box,
  Button,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  useTheme
} from '@mui/material'
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'

import { PreviewTextType } from '@/lib/enums'

interface PreviewTextFieldProps {
  preview: {
    size: number
    text: string
    type: PreviewTextType
  }
  setPreview: (preview: {
    size: number
    text: string
    type: PreviewTextType
  }) => void
}

const PreviewTextField = (props: PreviewTextFieldProps) => {
  const { preview, setPreview } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const theme = useTheme()

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleTypeClick: MouseEventHandler<HTMLLIElement> = (event) => {
    const {
      currentTarget: { innerText }
    } = event
    const type = innerText as PreviewTextType

    setPreview({
      ...preview,
      text: '',
      type
    })

    handleMenuClose()
  }

  const handleTextChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPreview({
      ...preview,
      text: event.target.value,
      type: !!event.target.value
        ? PreviewTextType.Custom
        : PreviewTextType.Sentence
    })
  }

  return (
    <Box display="flex" alignItems="center">
      <Tooltip title="Update preview text">
        <Button
          size="large"
          sx={{ marginRight: 1, textTransform: 'none' }}
          onClick={(e) => setAnchorEl(e.currentTarget)}>
          {preview.type} <ArrowDropDown />
        </Button>
      </Tooltip>
      <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={handleMenuClose}>
        {Object.values(PreviewTextType).map((type) => (
          <MenuItem
            key={type}
            sx={{
              backgroundColor:
                type === preview.type ? theme.palette.grey[100] : undefined
            }}
            onClick={handleTypeClick}>
            {type}
          </MenuItem>
        ))}
      </Menu>
      <TextField
        placeholder="Type something"
        fullWidth
        value={preview.text}
        onChange={handleTextChange}
      />
    </Box>
  )
}

export default PreviewTextField
