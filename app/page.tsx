import { Container } from '@mui/material'

import FontList from '@/components/FontList'
import Toolbar from '@/components/Toolbar'

const Home = () => {
  return (
    <Container
      component="main"
      sx={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
      <Toolbar />
      <FontList />
    </Container>
  )
}

export default Home
