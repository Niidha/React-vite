import React, { Fragment } from 'react'
import { products } from '../Constants/products'
import { FaShoppingCart, FaStar, FaTrash } from 'react-icons/fa'
import { useCart } from '../Providers/CartProviders' 
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'




const ShopPage = () => {

    const { cartList, setCartList} = useCart()
   

    const handleAddToCart = (product) => {
        const index=cartList.findIndex(cartListItem=>cartListItem.id==product.id)
        if(index == -1){
            product.quantity=1
            setCartList([product,...cartList])
           
        }else{
            const res=cartList.map(item=>{
                if(item.id==product.id){
                    return{...item,quantity:item.quantity+1}
                }
                return item
            })
            setCartList(res)
        }
        return toast.success("Product added successfully")  
    }
 



    

    return ( <Fragment>
         <div>
            <div className='d-flex justify-content-end align-items-center m-1'>
                <Link to={"/cart"} className='btn btn-success d-flex align-items-center gap-2 '><FaShoppingCart/> Cart ({cartList.length})</Link>
            </div>
        <div className='d-flex justify-content-center gap-2 flex-wrap mt-3'>
            {
                products.map(product => {
                    return <div key={product.id} style={{width: "15rem"}} className="bg-light p-2">
                        <div>
                            <img src={product.images[0]} alt={product.title} style={{width: "15rem"}}/>
                        </div>
                        <div className='text-center'>
                            <h6>{product.title}</h6>
                            <div className='w-100 d-flex justify-content-between'>
                                <div><FaStar /> {product.rating}</div>
                                <div><s className='text-muted'>${product.price}</s> ${(product.price - (product.price * (product.discountPercentage/100))).toFixed(2)}</div>
                            </div>
                            <button onClick={() => handleAddToCart(product)} className='bg-success p-1 w-100 mt-2 border-0 text-light rounded'><FaShoppingCart /> Add To Cart</button>
                        </div>
                    </div>
                })
            }
           
        </div>
       
        </div>
        

        </Fragment>

    )
}

export default ShopPage