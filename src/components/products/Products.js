import React from 'react';
import ProductDetail from '../product_detail/Product_detail';

const Products = (props) => {
    const {sl, name} = props
    const arr=[
        {
            id:1,
            name: "Bóng chuyền",
            xuatXu: "Trung Quốc"
        },
        {
            id:2,
            name:"Áo sơ mi trắng",
            xuatXu: "Thái Lan"
        },
        {
            id:3,
            name: "Tủ lạnh",
            xuatXu: "Nhật bản"
        }
    ]
    return (
        <div>
            <h1>Số lượng sản phẩm: {sl} </h1>
            <h1>Name: {name} </h1>

            {
                arr.map((item,index)=>(
                    <ProductDetail pro={item} key={index} />
                ))
            }
        </div>
    );
}

export default Products;
