import { action, makeAutoObservable } from 'mobx'
import RootStore from './RootStore'
import { IProductInCart } from '~/types/product'

export default class ProductStore {
  search: string = ''
  productsInCart: IProductInCart[]
  root: RootStore
  constructor(rootStore: RootStore) {
    this.root = rootStore
    makeAutoObservable(this, {
      setSearch: action,
      setProductsInCart: action,
    })
  }

  setSearch(search: string) {
    this.search = search
  }

  setProductsInCart(products: IProductInCart[]) {
    this.productsInCart = products
  }
}
