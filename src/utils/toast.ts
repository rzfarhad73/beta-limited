import { ToastOptions, toast } from 'react-toastify'

const config = {
  position: 'top-right',
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
} as ToastOptions<{}>

export const $toast = (message: String, type: String = 'error') => {
  if (type === 'error') {
    toast.error(message, config)
  }
  if (type === 'success') {
    toast.success(message, config)
  }
  if (type === 'warn') {
    toast.warn(message, config)
  }
}
