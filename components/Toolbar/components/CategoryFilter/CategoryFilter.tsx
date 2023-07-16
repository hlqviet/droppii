import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent
} from '@mui/material'

import categoryData from '@/data/categories.json'
import { useStore } from '@/store/useStore'

const CategoryFilter = () => {
  const { categories, setCategories } = useStore()

  const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value }
    } = event

    setCategories(typeof value === 'string' ? value.split(',') : value)
  }

  return (
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
        {categoryData.map(({ id, name, value }) => (
          <MenuItem key={id} value={value}>
            <Checkbox checked={categories.includes(value)} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CategoryFilter
