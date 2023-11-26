import { Box } from '@mui/material'
import { Input, RButton } from 'components/Base'
import theme from 'theme'
import { Search } from '@mui/icons-material'
import { useStore } from 'stores'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

const HeaderSearch = observer(function HeaderSearch() {
  const [value, setValue] = useState<string>('')
  const { product } = useStore()

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <Input
        id="search"
        placeholder="Searching for..."
        sx={{
          width: '100%',
          maxWidth: '35rem',
        }}
        InputProps={{
          startAdornment: (
            <Search
              sx={{
                position: 'relative',
                left: '12px',
                fill: theme.palette.grey[500],
              }}
            ></Search>
          ),
          sx: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: '100px',
            borderBottomLeftRadius: '100px',
            '& fieldset': { border: `1px solid ${theme.palette.grey[400]}`, borderRight: 0 },
            p: 0,
            '.MuiInputBase-input': {
              px: 2,
              py: 1.25,
              '&::placeholder': {
                fontSize: 14,
              },
            },
            '&:hover': {
              '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                border: `1px solid ${theme.palette.primary.main}`,
                width: '100%',
              },
            },
            '&:focus': {
              '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                outline: 0,
                border: 0,
              },
            },
          },
        }}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            product.setSearch(value)
          }
        }}
      />
      <RButton
        sx={{
          borderTopRightRadius: '100px',
          borderBottomRightRadius: '100px',
          width: '125px',
          boxShadow: 'none',
        }}
        onClick={() => product.setSearch(value)}
      >
        Search
      </RButton>
    </Box>
  )
})

export default HeaderSearch
