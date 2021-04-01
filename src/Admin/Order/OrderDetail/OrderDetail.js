import React, { useEffect } from 'react';


function OrderDetail(props) {

    console.log(props)

    return (
        <div>
            <div className="">

                <table class="table table-light">
                    <thead>
                        <tr>
                            <th scope="col">Tên sản phẩm </th>
                            <th scope="col"></th>
                            <th scope="col">Giá</th>
                            <th scope="col">Số lượng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.item.map((product, index) => {
                                const { name, price , quantity ,thumbnail } = product
                                return (
                                    <tr key={index}>
                                        <td>{name}</td>
                                        <td> <img className="img-thumbnail w-25" src={thumbnail} /> </td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default OrderDetail;