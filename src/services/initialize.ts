import axios from 'axios'
import { $toast } from 'utils/toast'

export const baseAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  timeout: 10 * 1000,
})

baseAxios.interceptors.request.use(
  (config: any) => {
    const userLocalSession = localStorage.getItem('user') ?? ''
    if (userLocalSession) {
      config.headers['Session-ID'] = userLocalSession
    }
    return config
  },

  (error: any) => {
    return Promise.reject(error)
  }
)

baseAxios.interceptors.response.use(
  (response: any) => {
    return response
  },
  (error: any) => {
    let message: string
    try {
      message = (error as any).message
      if (message !== 'canceled') {
        $toast('An error occured, try again')
      }
    } catch {}

    return Promise.reject(error)
  }
)
