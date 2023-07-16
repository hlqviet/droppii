import { Grid } from '@mui/material'

import FontPreviewOptions from '@/components/Toolbar/components/FontPreviewOptions'

const Toolbar = () => {
  return (
    <Grid container spacing={1}>
      <FontPreviewOptions />
    </Grid>
  )
}

export default Toolbar
