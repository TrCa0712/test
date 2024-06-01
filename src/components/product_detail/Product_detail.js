import React from 'react';

const ProductDetail = (props) => {
    const {pro}=props
    return (
        <div>
            <h1>Tên sản phẩm: {pro.name} </h1>
            <p>Xuất xứ: {pro.xuatXu} </p>
        </div>
    );
}

export default ProductDetail;
