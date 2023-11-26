export interface IProduct {
  id: string
  name: string
  price: number
  originalPrice: number
  rating: number
  image: string
  discount: string
}

export interface IProductInCart {
  productId: string
  quantity: number
  name: string
  price: number
}

export interface IUpdateCartParams {
  id: string
}

export type TAction = 'ADD' | 'SUBTRACT'
