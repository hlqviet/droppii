import {
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

  const handleTypeClick: MouseEventHandler<HTMLLIElement> = (e) => {
    setPreview({
      ...preview,
      type: e.currentTarget.innerText as PreviewTextType
    })
    handleMenuClose()
  }

  const handleTextChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPreview({
      ...preview,
      text: e.target.value,
      type: !!e.target.value ? PreviewTextType.Custom : PreviewTextType.Sentence
    })
  }

  return (
    <>
      <Tooltip title="Update preview text">
        <Button
          size="large"
          sx={{ textTransform: 'none' }}
          onClick={(e) => setAnchorEl(e.currentTarget)}>
          {preview.type}
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
        value={preview.text}
        onChange={handleTextChange}
      />
    </>
  )
}

export default PreviewTextField
