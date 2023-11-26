import { Route, Routes } from 'react-router-dom'
import Products from './pages/products'
import Header from './components/Header'
import { useStore } from 'stores'
import { useCallback, useEffect } from 'react'
import { createSession } from 'services/api/user'
import { observer } from 'mobx-react-lite'
import { getProductsInCart } from './services/api/product'
import { IProductInCart } from './types/product'

const App = observer(function App() {
  const { user, product } = useStore()

  useEffect(() => {
    const userLocalSession = localStorage.getItem('user') ?? ''
    if (userLocalSession) {
      user.setSession(userLocalSession)
      fetchProductsInCart()
    } else {
      userSession()
    }
  }, [])

  const userSession = useCallback(async () => {
    await createSession().then((res) => {
      if (res) {
        user.setSession(res.data)
        localStorage.setItem('user', res.data)
        fetchProductsInCart()
      }
    })
  }, [])

  const fetchProductsInCart = useCallback(async () => {
    await getProductsInCart().then((res) => {
      if (res) {
        if (typeof res.data == 'object') {
          product.setProductsInCart(res.data.filter((x: IProductInCart) => x.quantity))
        }
      }
    })
  }, [])

  return (
    <div>
      {user.session && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="*" element={<>Not Implemented.</>}></Route>

            <Route path="*">Not Implemented.</Route>
          </Routes>
        </>
      )}
    </div>
  )
})

export default App
