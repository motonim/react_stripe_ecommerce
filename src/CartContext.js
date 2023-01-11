import { createContext, useState } from 'react'
import { productsArray } from './productsStore'

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
})

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([])

  // [ { id: 1, quantity: 2 } ] -> the information in the cart

  function getProductQuantity(id) {
    const quantity = cartProducts.find((product) => product.id === id)?.quantity // we're going through cartProducts array and we're gonna find the product where the id is equal to the id we passed in. and then if it gets us an undefined object, we're not going to ask for the dot quantity. but if this find method becomes an actual object, we're gonna get the quantity property. 중요!!
    if (quantity === undefined) {
      return 0
    }

    return quantity
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id)

    if (quantity === 0) {
      // product is not in cart
      setCartProducts([
        ...cartProducts, // take all the items that are already in cart and put them in front of this array
        {
          id: id,
          quantity: 1,
        },
      ])
    } else {
      //product is in cart
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 } // take the entire product and then add 1 to the quantity
            : product
        )
      )
    }
  }

  const contextValue = {
    items: [],
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

// Context is more like that we are defining there is a room for function, array ...
// and then provider is the one that we define the function
// Context ( cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context
