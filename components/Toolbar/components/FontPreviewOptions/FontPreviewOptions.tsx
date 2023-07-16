'use client'

import { RestartAlt } from '@mui/icons-material'
import { Grid, IconButton, Tooltip } from '@mui/material'
import { ChangeEventHandler } from 'react'

import FontSizeSlider from '@/components/FontSizeSlider'
import PreviewTextField from '@/components/Toolbar/components/PreviewTextField'
import SearchField from '@/components/Toolbar/components/SearchField'
import { useStore } from '@/store/useStore'

const FontPreviewOptions = () => {
  const { query, preview, setQuery, setPreview, reset } = useStore()

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value)
  }

  const handlePreviewChange = (nextPreview: typeof preview) => {
    setPreview(nextPreview)
  }

  const handleResetClick = () => {
    reset()
  }

  return (
    <Grid container spacing={1} position="sticky">
      <Grid item xs={12} sm={6} md={3}>
        <SearchField value={query} onChange={handleSearchChange} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <PreviewTextField preview={preview} setPreview={handlePreviewChange} />
      </Grid>
      <Grid item xs={10} sm={6} md={4}>
        <FontSizeSlider preview={preview} setPreview={handlePreviewChange} />
      </Grid>
      <Grid item xs={2} sm={1} md={1} textAlign="right">
        <Tooltip title="Reset">
          <IconButton size="large" onClick={handleResetClick}>
            <RestartAlt />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  )
}

export default FontPreviewOptions
