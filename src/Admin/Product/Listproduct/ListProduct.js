import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/Product/products.action';


const mapState = ({productsData}) => ({
    products: productsData.products
})
function ListProduct(props) {
    const { products } = useSelector(mapState)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(
            fetchProducts()
        )
    }, [])

    console.log(products)
    return (
        <div>
           {products.map((product) => {
               const { name , description } = product
               return(
                   <div>
                        {name}
                   </div>
               )
           })}
           
            
        </div>
    );
}

export default ListProduct;