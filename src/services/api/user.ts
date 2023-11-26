/* eslint-disable no-ex-assign */
/* eslint-disable no-self-assign */
import { baseAxios } from '../initialize'

const createSession = async () => {
  let error = null
  let loading = true
  let data = null
  let controller = new AbortController()
  try {
    const response = await baseAxios.request({
      signal: controller.signal,
      method: 'GET',
      url: '/createsession',
    })
    data = response.data
  } catch (error: any) {
    error = error
  } finally {
    loading = false
  }
  return { data, error, loading }
}

export { createSession }
