import React from 'react';
import { Link } from 'react-router-dom';

function ListCategory(props) {
    return (
        <div>
            List Danh mục 
            <Link to="/admin/addcategory" >Thêm danh mục</Link>
        </div>
    );
}

export default ListCategory;