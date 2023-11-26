import { Box } from '@mui/system'
import { IProduct } from '~/types/product'
import Tag from './Tag'
import ImageSection from './ImageSection'
import Details from './Details'

export default function Card({ product }: { product: IProduct }) {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '4px',
        position: 'relative',
        height: '27rem',
      }}
    >
      {product.discount && <Tag discount={product.discount} />}
      <ImageSection image={product.image} name={product.name} />
      <Details product={product} />
    </Box>
  )
}
