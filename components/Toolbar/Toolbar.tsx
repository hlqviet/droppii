'use client'

import { RestartAlt } from '@mui/icons-material'
import { Box, IconButton, Tooltip } from '@mui/material'
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'

import FontSizeSlider from '@/components/FontSizeSlider'
import PreviewTextField from '@/components/Toolbar/components/PreviewTextField'
import SearchField from '@/components/Toolbar/components/SearchField'
import { PreviewTextType } from '@/lib/enums'

const defaultOptions = {
  search: '',
  preview: {
    size: 40,
    text: '',
    type: PreviewTextType.Sentence
  }
}

const Toolbar = () => {
  const [toolbarOptions, setToolbarOptions] = useState(defaultOptions)
  const { search, preview } = toolbarOptions

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setToolbarOptions((prevState) => ({
      ...prevState,
      search: e.target.value
    }))
  }

  const handlePreviewChange = (nextPreview: typeof preview) => {
    setToolbarOptions((prevState) => ({
      ...prevState,
      preview: nextPreview
    }))
  }

  const handleResetClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setToolbarOptions(defaultOptions)
  }

  return (
    <Box display="flex" alignItems="center" width="100%" position="sticky">
      <SearchField value={search} onChange={handleSearchChange} />
      <PreviewTextField preview={preview} setPreview={handlePreviewChange} />
      <FontSizeSlider preview={preview} setPreview={handlePreviewChange} />
      <Tooltip title="Reset">
        <IconButton
          size="large"
          disabled={toolbarOptions === defaultOptions}
          onClick={handleResetClick}>
          <RestartAlt />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default Toolbar
