import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQtyItem, addToCart, reduceCartItem, removeCart, removeCartItem } from '../../redux/Cart/cart.action';
import { selectCartTotal } from '../../redux/Cart/cart.selectors';
import swal from 'sweetalert';
import { formatter } from '../../App';
import { editProduct, fetchProductStart, reducerNumber, updateNumber } from '../../redux/Product/products.action';


const mapState = ({ productsData }) => ({
    products: productsData.products,
    productDetail : productsData.product
})
function Item(props) {
    const { products , productDetail } = useSelector(mapState);
    const [numberProduct , setNumberProduct] = useState(productDetail.number)
    const [change, setChange] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductStart(props.documentID))
    }, [change])
    
    console.log(productDetail)


    const handleAddNumber = (data, id) => {
        dispatch(updateNumber(data,id))
    }
    const handleReduceNumber = (data, id) => {
        dispatch(reducerNumber(data,id))
    }


    const addProduct = (product) => {
        dispatch(addToCart(product))
        handleAddNumber(productDetail , product.documentID)
        setChange(true)
       
    }
    const reduceCart = (product) => {
        dispatch(reduceCartItem(product))
        handleReduceNumber(productDetail , product.documentID)
        setChange(true)
    }
    const removeCart = (documentID) => {

        swal({
            title: "Xóa sản phẩm khỏi giỏ hàng?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(removeCartItem({ documentID }))
                }
            });
    }

    const { thumbnail, name, quantity, price } = props
    console.log(props)
    return (
        <>
            {  quantity == 0 ? "" :
                <tr>
                    <th scope="row"><img className="img-thumbnail w-25" src={thumbnail} /></th>
                    <td>{name}</td>
                    <td> <div className="d-flex "> <button className="btn" onClick={() => reduceCart(props)} ><i class="fas fa-minus"></i></button>  <p className="m-2">{quantity}</p>  <button className="btn  " onClick={() => addProduct(props)}><i class="fas fa-plus"></i></button> </div> </td>
                    <td>{formatter.format(price)}</td>
                    <td > <button className="btn btn-danger" onClick={() => removeCart(props.documentID)}><i class="fas fa-trash-alt"></i></button> </td>
                </tr>


            }


        </>
    );
}

export default Item;