import { Box, Typography } from '@mui/material'
import theme from 'theme'
import { Star } from '@mui/icons-material'
import { IProduct } from '~/types/product'
import Action from './DetailsAction'

const Rating = ({ rate }: { rate: number }) => {
  const rates = Array(5)
    .fill(false)
    .map((x, index) => index + 1 <= rate)
  return (
    <Box component="div" sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
      {rates.map((x, index) => (
        <Star
          key={index}
          sx={{
            fontSize: '1rem',
            fill: x ? '#F0B23D' : 'transparent',
            stroke: x ? '#F0B23D' : theme.palette.grey[500],
          }}
        ></Star>
      ))}
      <Typography variant="subtitle2" sx={{ marginLeft: '4px', color: theme.palette.grey[500] }}>
        ({rate})
      </Typography>
    </Box>
  )
}

const Price = ({ price, originalPrice }: { price: number; originalPrice: number }) => {
  return (
    <Box component="span" sx={{ display: 'flex', gap: 1 }}>
      <Typography variant="subtitle2" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
        ${price.toFixed(2)}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ color: theme.palette.grey[500], textDecorationLine: 'line-through', fontWeight: 500 }}
      >
        ${originalPrice.toFixed(2)}
      </Typography>
    </Box>
  )
}

const Details = ({ product }: { product: IProduct }) => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        p: 2,
        backgroundColor: 'white',
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
        minHeight: '7.25rem',
      }}
    >
      <Box
        component="span"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            width: '150px',
          }}
        >
          {product.name}
        </Typography>
        <Box
          component="span"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            justifyContent: 'space-between',
          }}
        >
          <Rating rate={product.rating} />
          <Price price={product.price} originalPrice={product.originalPrice} />
        </Box>
      </Box>
      <Action id={product.id} />
    </Box>
  )
}

export default Details
