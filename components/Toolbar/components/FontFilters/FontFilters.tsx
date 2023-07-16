'use client'

import { Grid } from '@mui/material'

import CategoryFilter from '@/components/Toolbar/components/CategoryFilter'
import LanguageFilter from '@/components/Toolbar/components/LanguageFilter'
import VariableFontFilter from '@/components/Toolbar/components/VariableFontFilter'

const FontFilters = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={3}>
        <CategoryFilter />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <LanguageFilter />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <VariableFontFilter />
      </Grid>
    </Grid>
  )
}

export default FontFilters
