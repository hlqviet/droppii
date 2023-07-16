import { Container } from '@mui/material'

import Toolbar from '@/components/Toolbar'

const Home = () => {
  return (
    <Container
      component="main"
      sx={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
      <Toolbar />
    </Container>
  )
}

export default Home
