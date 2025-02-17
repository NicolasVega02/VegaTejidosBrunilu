import React, { useState , createContext , useContext} from 'react'
// Se crea el contexto
export const CartContext = createContext()

//Se declara el Proveedor
export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addItem = (item , quantity) => {
        let compra = {...item , quantity};
        if(isInCart(item.id)){
            //sumar cantidades del producto con el mismo id 
            const cartActualizado = cart.map((producto) =>{
                if(producto.id === item.id){
                    return {...producto, quantity : producto.quantity + quantity}
                }else{
                    return producto
                }
            })
        }else{
            //Agregar item nuevo al carrito
            setCart ([...cart,compra]);
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter((item)=> item.id !== id));
    }
    const clearCart = () => {
        setCart([]);
    }
    const isInCart = (id) => {
        return cart.some((item)=> item.id === id ) 
    }
    const cartQuantity = () =>{
        return cart.reduce((acc, item)=> acc += item.quantity , 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc,item)=> acc += item.price * item.quantity,0)
    }
    return (
        <CartContext.Provider value = {{cart, addItem, removeItem,clearCart,cartQuantity,cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}


export const useCart = () => useContext(CartContext)