import {
  Box,
  Button,
  Menu,
  MenuItem,
  Slider,
  SliderProps,
  Tooltip,
  useTheme
} from '@mui/material'
import { MouseEventHandler, useState } from 'react'

import { PreviewTextType } from '@/lib/enums'

const sizeOptions = [8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280]

interface FontSizeSliderProps {
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

const FontSizeSlider = (props: FontSizeSliderProps) => {
  const { preview, setPreview } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const theme = useTheme()

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleSizeClick: MouseEventHandler<HTMLLIElement> = (e) => {
    setPreview({
      ...preview,
      size: parseInt(e.currentTarget.innerText, 10)
    })
    handleMenuClose()
  }

  const handleSizeChange: SliderProps['onChange'] = (_e, value) => {
    setPreview({
      ...preview,
      size: value as number
    })
  }

  return (
    <Box display="flex" alignItems="center" height="100%">
      <Tooltip title="Font size">
        <Button
          size="large"
          sx={{ marginRight: 1, textTransform: 'none' }}
          onClick={(e) => setAnchorEl(e.currentTarget)}>
          {preview.size}px
        </Button>
      </Tooltip>
      <Menu
        open={!!anchorEl}
        anchorEl={anchorEl}
        sx={{ height: '17rem' }}
        onClose={handleMenuClose}>
        {sizeOptions.map((size) => (
          <MenuItem
            key={size}
            sx={{
              backgroundColor:
                size === preview.size ? theme.palette.grey[100] : undefined
            }}
            onClick={handleSizeClick}>
            {size}
          </MenuItem>
        ))}
      </Menu>
      <Slider
        max={300}
        min={8}
        value={preview.size}
        onChange={handleSizeChange}
      />
    </Box>
  )
}

export default FontSizeSlider
