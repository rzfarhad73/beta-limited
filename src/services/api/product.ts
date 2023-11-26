/* eslint-disable no-ex-assign */
/* eslint-disable no-self-assign */
import { IUpdateCartParams, TAction } from '~/types/product'
import { baseAxios } from '../initialize'

const getProductsList = async ({ search }: { search: string }) => {
  let error = null
  let loading = true
  let data = null
  let controller = new AbortController()
  const url = search ? '/search' : '/products'
  const query = search ? { name: search } : {}
  try {
    const response = await baseAxios.request({
      signal: controller.signal,
      method: 'GET',
      url,
      params: query,
    })
    data = response.data
  } catch (error: any) {
    error = error
  } finally {
    loading = false
  }
  return { data, error, loading }
}

const getProductsInCart = async () => {
  let error = null
  let loading = true
  let data = null
  let controller = new AbortController()

  try {
    const response = await baseAxios.request({
      signal: controller.signal,
      method: 'GET',
      url: '/view-cart',
    })
    data = response.data
  } catch (error: any) {
    error = error
  } finally {
    loading = false
  }
  return { data, error, loading }
}

const updateCart = async ({ action, params }: { action: TAction; params: IUpdateCartParams }) => {
  let error = null
  let loading = true
  let data = null
  let controller = new AbortController()

  const url = action === 'ADD' ? '/add-to-cart' : 'subtract-from-cart'

  try {
    const response = await baseAxios.request({
      signal: controller.signal,
      method: 'POST',
      url,
      params,
    })
    data = response.data
  } catch (error: any) {
    error = error
  } finally {
    loading = false
  }
  return { data, error, loading }
}

export { getProductsList, getProductsInCart, updateCart }
