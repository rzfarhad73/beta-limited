import { Typography } from '@mui/material'
import theme from 'theme'

const Tag = ({ discount }: { discount: string }) => {
  return (
    <Typography
      variant="caption"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderRadius: '100px',
        backgroundColor: theme.palette.primary.main,
        width: '75px',
        py: 1,
        position: 'absolute',
        lineHeight: 1,
        left: '16px',
        top: '16px',
      }}
    >
      {discount}
    </Typography>
  )
}

export default Tag
