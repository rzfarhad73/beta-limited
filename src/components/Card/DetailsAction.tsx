import { Box, Typography } from '@mui/material'
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import { RButton } from 'components/Base'
import { Add, Remove } from '@mui/icons-material'
import { updateCart } from 'services/api/product'
import { IUpdateCartParams, TAction } from '~/types/product'
import { useStore } from 'stores'
import { observer } from 'mobx-react-lite'

const ActionItem = ({
  number,
  setNumber,
  id,
  changer,
}: {
  number: number
  setNumber: Dispatch<SetStateAction<number>>
  id: string
  changer: number
}) => {
  const changeNumber = useCallback(
    (value: number): any => {
      setNumber(number + value)
      const params = { id }
      const action = (value === 1 ? 'ADD' : 'SUBTRACT') as TAction
      postUpdateCart({ action, params })
    },
    [number]
  )

  const postUpdateCart = useCallback(
    async ({ action, params }: { action: TAction; params: IUpdateCartParams }) => {
      await updateCart({ action, params }).then((res) => {})
    },
    []
  )
  const Icon = changer === 1 ? Add : Remove
  return (
    <RButton
      variant="outlined"
      size="small"
      sx={{
        minWidth: '28px',
        minHeight: '28px',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0,
      }}
      onClick={() => changeNumber(changer)}
    >
      <Icon
        sx={{
          fontSize: '1.25rem',
        }}
      />
    </RButton>
  )
}

const Action = observer(function Action({ id }: { id: string }) {
  const { product } = useStore()
  const [number, setNumber] = useState<number>(0)

  useEffect(() => {
    const item = product.productsInCart?.find((x) => x.productId === id)
    setNumber(item?.quantity ?? 0)
  }, [product.productsInCart, id])

  return (
    <Box
      component="span"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      {number > 0 && <ActionItem number={number} setNumber={setNumber} id={id} changer={-1} />}
      {number > 0 && <Typography variant="subtitle2">{number}</Typography>}
      <ActionItem number={number} setNumber={setNumber} id={id} changer={1} />
    </Box>
  )
})

export default Action
