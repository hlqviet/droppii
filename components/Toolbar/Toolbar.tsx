'use client'

import { RestartAlt } from '@mui/icons-material'
import { Box, Grid, IconButton, Tooltip } from '@mui/material'
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
    <Grid container spacing={1} position="sticky">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <SearchField value={search} onChange={handleSearchChange} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PreviewTextField
            preview={preview}
            setPreview={handlePreviewChange}
          />
        </Grid>
        <Grid item xs={10} sm={6} md={4}>
          <FontSizeSlider preview={preview} setPreview={handlePreviewChange} />
        </Grid>
        <Grid item xs={2} sm={1} md={1} textAlign="right">
          <Tooltip title="Reset">
            <IconButton
              size="large"
              disabled={fontPreviewOptions === defaultFontPreviewOptions}
              onClick={handleResetClick}>
              <RestartAlt />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Toolbar
