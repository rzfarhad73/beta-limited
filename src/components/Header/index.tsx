import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import Search from './Search'

function Header() {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        py: 2,
        px: 3,
        gap: 4,
        boxShadow: '0px 2px 13px 2px rgba(233, 233, 233, 0.25)',
      }}
    >
      <Link to="/">
        <Box
          component="img"
          src="/logo.png"
          alt="beta-limited"
          title="Beta Limited"
          width="125px"
          sx={{ display: 'flex' }}
        ></Box>
      </Link>
      <Search />
      <Box component="span" sx={{ display: { xs: 'none', sm: 'block' } }}></Box>
    </Box>
  )
}

export default Header
