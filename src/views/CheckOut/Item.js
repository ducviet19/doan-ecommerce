import React from 'react';

function Item(props) {

    const { thumbnail , name , size ,quantity , price } = props
    return (
        <>
            <tr>
                <th scope="row"><img className="img-thumbnail w-25" src={thumbnail} /></th>
                <td>{name}</td>
                <td>Size</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>X</td>
            </tr>

        </>
    );
}

export default Item;