import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQtyItem, addToCart, reduceCartItem, removeCart, removeCartItem } from '../../redux/Cart/cart.action';
import { selectCartTotal } from '../../redux/Cart/cart.selectors';
import swal from 'sweetalert';
import { formatter } from '../../App';
import { editProduct, fetchProductStart, reducerNumber, updateNumber } from '../../redux/Product/products.action';
import ButtonCart from './ButtonCart';
import { useHistory } from 'react-router';
import { firestore } from '../../firebase/ultils';
import LoadingBox from '../../component/LoadingBox/LoadingBox';


const mapState = ({ productsData }) => ({
    productDetail: productsData.product
})


const mapLoading = state => ({
    loadingCart: state.cartData.loadingCart,
    success: state.cartData.success
});
function Item(props) {
    const { productDetail } = useSelector(mapState);
    const { loadingCart } = useSelector(mapLoading);

    const [change, setChange] = useState(false)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchProductStart(id))
    // },[change])

    const handleAddNumber = (data, id) => {
        dispatch(updateNumber(data, id))
    }
    const handleReduceNumber = (data, id) => {
        dispatch(reducerNumber(data, id))
    }

    console.log('props.index',props.index)


    const handleFetchDetailProduct = (documentID) => {
        return new Promise((resolve, reject) => {
            firestore.collection('products').doc(documentID)
                .get()
                .then(snapshot => {
                    if (snapshot.exists) {
                        resolve({
                            ...snapshot.data(),
                            documentID: documentID
                        });

                    }


                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    const addProduct = async (product) => {
        dispatch(addToCart(product));
        let detail = await handleFetchDetailProduct(product.documentID)
        handleAddNumber(detail, product.documentID)

    }
    const reduceCart = async (product) => {
        console.log('product',product)
        dispatch(reduceCartItem(product))
        let detail = await handleFetchDetailProduct(product.documentID)
        handleReduceNumber(detail, product.documentID)
    }
  
        const removeCart = (index) => {
            console.log(index)
        swal({
            title: "Xóa sản phẩm khỏi giỏ hàng?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // dispatch(removeCartItem({ documentID ,size }))
                    dispatch(removeCartItem({ index }))
                }
            });
    }

    const { thumbnail, name, quantity, price, number } = props
    return (
        <>
            {  quantity == 0 ? "" :
                <tr>
                    <th scope="row"><img className="img-thumbnail w-25" src={thumbnail} /></th>
                    <td>{name}</td>
                    <td>
                        <div className="d-flex pt-2 ">
                            {/* {loadingCart == false ? <LoadingBox /> : <button className="btn" onClick={() => reduceCart(props)} ><i className="fas fa-minus"></i></button>} */}
                           <button className="btn" onClick={() => reduceCart(props) } ><i className="fas fa-minus"></i></button>
                            <p className="m-2">{quantity}</p>
                            {/* <> {quantity == number ? <button disabled className="btn  " onClick={() => addProduct(props)}>Hết hàng</button> :
                                <> {loadingCart == false ? <LoadingBox /> : <button className="btn  " onClick={() => addProduct(props)}><i className="fas fa-plus"></i></button>
                                }  </>
                            } </> */}
                            <> {quantity == number ? <button disabled className="btn  " onClick={() => addProduct(props)}>Hết hàng</button> :
                               <button className="btn  " onClick={() => addProduct(props)}><i className="fas fa-plus"></i></button>
                               
                            } </>
                        </div>


                    </td>
                    <td>{props.size}</td>
                    <td>{formatter.format(price * quantity)}</td>
                  
                    <td > <button className="btn btn-danger" onClick={() => 
                        //  removeCart(props.documentID ,props.size
                          removeCart(props.index
                         )}><i className="fas fa-trash-alt"></i></button> </td>
                </tr>
            }
        </>
    );
}

export default Item;