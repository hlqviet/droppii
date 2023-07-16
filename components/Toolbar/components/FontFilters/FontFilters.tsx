'use client'

import { ErrorOutline } from '@mui/icons-material'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Tooltip
} from '@mui/material'
import { ChangeEvent } from 'react'

import categoryData from '@/data/categories.json'
import languages from '@/data/languages.json'
import { useStore } from '@/store/useStore'

const allLanguages = [
  { id: 0, name: 'All languages', subset: '' },
  ...languages
]

const FontFilters = () => {
  const {
    categories,
    subset,
    variableOnly,
    setCategories,
    setSubset,
    setVariableOnly
  } = useStore()

  const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value }
    } = event

    setCategories(typeof value === 'string' ? value.split(',') : value)
  }

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value }
    } = event

    setSubset(value)
  }

  const handleVariableFontChange = (
    _event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setVariableOnly(checked)
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={3}>
        <FormControl fullWidth>
          <InputLabel>Categories</InputLabel>
          <Select
            multiple
            input={<OutlinedInput label="Categories" />}
            value={categories}
            renderValue={(selected) =>
              categories.length === categoryData.length
                ? 'Categories'
                : selected.join(',')
            }
            onChange={handleCategoryChange}>
            {categoryData.map(({ id, name }) => (
              <MenuItem key={id} value={name}>
                <Checkbox checked={categories.includes(name)} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <FormControl fullWidth>
          <InputLabel>Language</InputLabel>
          <Select
            input={<OutlinedInput label="Language" value={subset} />}
            onChange={handleLanguageChange}>
            {allLanguages.map(({ id, name, subset }) => (
              <MenuItem key={id} value={subset}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <FormControlLabel
          control={
            <Checkbox
              checked={variableOnly}
              onChange={handleVariableFontChange}
            />
          }
          label="Show only variable fonts"
          sx={{ height: '100%' }}
        />
        <Tooltip title="You can use these fonts to create custom styles">
          <IconButton size="large">
            <ErrorOutline />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  )
}

export default FontFilters
