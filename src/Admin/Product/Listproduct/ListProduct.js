import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct, fetchProducts } from '../../../redux/Product/products.action';


const mapState = ({ productsData }) => ({
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
        <div className="">
            <Link to="/admin/newproduct"><button className="btn btn-primary">Thêm mới sản phẩm</button> </Link>
            <h2>Danh sách sản phẩm</h2>

            <table class="table table-light">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Loại sản phẩm</th>
                        <th scope="col">Giá sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index) => {
                            const { name, description , category , thumbnail , price , documentID} = product
                            return (
                                <tr key={index}>
                                <th scope="row">{documentID}</th>
                                <td><Link to={`/editproduct/${documentID}`} >{name}</Link> </td>
                                <td> <img className="img-thumbnail w-25" src={thumbnail}  /> </td>
                                <td>{category}</td>
                                <td>{price}</td>
                                <td ><button className="btn btn-danger" onClick={() => dispatch(deleteProduct(documentID)) }>X</button></td>
                            </tr>
                            )
                        })
                    }
                    

                </tbody>
            </table>

        </div>
    );
}

export default ListProduct;


