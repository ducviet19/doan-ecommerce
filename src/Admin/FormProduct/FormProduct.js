import React, { useEffect, useState } from 'react';



function FormProduct(props) {


    const [name,SetName] = useState('');
    const [category,SetCategory] = useState('');
    const [description,SetDescription] = useState('');
    const [price,SetPrice] = useState('');


    useEffect(() => {

    },[]);


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit")

    }

    return (
        <div className="m-2">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="name">Tên sản phẩm</label>
                    <input type="text" class="form-control" id="name" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div class="form-group">
                    <label for="category">Loại sản phẩm</label>
                    <select>
                        <option>Áo</option>
                        <option>Quần</option>
                        <option>Phụ kiện</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="description">Miêu tả sản phẩm</label>
                    <textarea type="text" class="form-control" id="description" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div class="form-group">
                    <label for="price">Giá sản phẩm</label>
                    <input type="text" class="form-control" id="price" placeholder="Nhập tên sản phẩm"/>
                </div>
                <div class="form-group">
                    <label for="image">Hình ảnh sản phẩm</label>
                    <input type="file" class="form-control" id="image" placeholder="Nhập tên sản phẩm"/>
                </div>

                <button className="btn btn-primary" type="submit">
                Thêm sản phẩn
              </button>
                
            </form>
        </div>
    );
}

export default FormProduct;