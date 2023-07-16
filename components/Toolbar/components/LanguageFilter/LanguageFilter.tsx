import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent
} from '@mui/material'

import languages from '@/data/languages.json'
import { useStore } from '@/store/useStore'

const allLanguages = [
  { id: 0, name: 'All languages', subset: '' },
  ...languages
]

const LanguageFilter = () => {
  const { subset, setSubset } = useStore()

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value }
    } = event

    setSubset(value)
  }

  return (
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
  )
}

export default LanguageFilter
