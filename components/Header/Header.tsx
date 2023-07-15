import { ViewSidebar } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import Link from 'next/link'

import Logo from '@/components/Logo'

const Header = () => {
  return (
    <Box
      component="header"
      display="flex"
      justifyContent="space-between"
      paddingX={8}
      paddingY={1.5}
      borderBottom="1px solid #cacaca">
      <Box width="11.875rem">
        <Link href="/">
          <Logo />
        </Link>
      </Box>
      <IconButton size="large">
        <ViewSidebar />
      </IconButton>
    </Box>
  )
}

export default Header
