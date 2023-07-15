'use client'

import { RestartAlt } from '@mui/icons-material'
import { Box, IconButton, Tooltip } from '@mui/material'
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'

import FontSizeSlider from '@/components/FontSizeSlider'
import PreviewTextField from '@/components/Toolbar/components/PreviewTextField'
import SearchField from '@/components/Toolbar/components/SearchField'
import { PreviewTextType } from '@/lib/enums'

const defaultFontPreviewOptions = {
  search: '',
  preview: {
    size: 40,
    text: '',
    type: PreviewTextType.Sentence
  }
}

const Toolbar = () => {
  const [fontPreviewOptions, setFontPreviewOptions] = useState(
    defaultFontPreviewOptions
  )
  const { search, preview } = fontPreviewOptions

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFontPreviewOptions((prevState) => ({
      ...prevState,
      search: e.target.value
    }))
  }

  const handlePreviewChange = (nextPreview: typeof preview) => {
    setFontPreviewOptions((prevState) => ({
      ...prevState,
      preview: nextPreview
    }))
  }

  const handleResetClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setFontPreviewOptions(defaultFontPreviewOptions)
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      position="sticky">
      <SearchField value={search} onChange={handleSearchChange} />
      <PreviewTextField preview={preview} setPreview={handlePreviewChange} />
      <FontSizeSlider preview={preview} setPreview={handlePreviewChange} />
      <Tooltip title="Reset">
        <IconButton
          size="large"
          disabled={fontPreviewOptions === defaultFontPreviewOptions}
          onClick={handleResetClick}>
          <RestartAlt />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default Toolbar
