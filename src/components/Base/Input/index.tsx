import { TextField, TextFieldProps } from '@mui/material'

export const Input = function Input(props: TextFieldProps) {
  return <TextField variant="outlined" {...props} />
}
