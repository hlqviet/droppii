import { Grid } from '@mui/material'

import FontFilters from '@/components/Toolbar/components/FontFilters'
import FontPreviewOptions from '@/components/Toolbar/components/FontPreviewOptions'

const Toolbar = () => {
  return (
    <Grid container rowGap={2}>
      <FontPreviewOptions />
      <FontFilters />
    </Grid>
  )
}

export default Toolbar
