import { Button, ButtonProps } from '@mui/material'

export const RButton = function RButton(props: ButtonProps) {
  const { children } = props

  return (
    <Button variant="contained" color="primary" {...props}>
      {children}
    </Button>
  )
}
