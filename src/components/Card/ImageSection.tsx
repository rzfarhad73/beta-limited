import { Box } from '@mui/material'
import theme from 'theme'

const ImageSection = ({ image, name }: { image: string; name: string }) => {
  return (
    <Box
      component="span"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.grey[200],
        height: '100%',
        borderTopRightRadius: '12px',
        borderTopLeftRadius: '12px',
      }}
    >
      <Box
        component="img"
        src={image ? image : '/logo.png'}
        alt={name}
        title={name}
        width="75%"
        onError={(e) => {
          e.target.src = '/logo.png'
        }}
      ></Box>
    </Box>
  )
}

export default ImageSection
