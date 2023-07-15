import { Container } from '@mui/material'

import Toolbar from '@/components/Toolbar'

export default function Home() {
  return (
    <Container
      component="main"
      sx={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
      <Toolbar />
    </Container>
  )
}
