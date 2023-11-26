import { Box } from '@mui/system'
import Card from 'components/Card'
import { SetStateAction, useCallback, useEffect, useState } from 'react'
import { IProduct } from '~/types/product'
import { getProductsList } from 'services/api/product'
import { Grid } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useStore } from 'stores'

const ProductsList = observer(function ProductsList() {
  const { product } = useStore()
  const [products, setProducts] = useState<IProduct[]>([])

  const fetchProducts = useCallback(async ({ search }: { search: string }) => {
    await getProductsList({ search }).then((res: { data: SetStateAction<IProduct[]> }) => {
      if (res) {
        setProducts(res.data)
      }
    })
  }, [])

  useEffect(() => {
    fetchProducts({ search: product.search })
  }, [product.search])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          py: '24px',
        }}
        container
        columns={{ xs: 4, sm: 8, md: 12, xl: 12 }}
      >
        {products?.map((p) => (
          <Grid xs={2} sm={3} md={3} xl={2} key={p.id} item={true}>
            <Card product={p}></Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
})

export default ProductsList
