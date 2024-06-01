import Products from "../products/Products";

export default function(){
    let soluong=5
    let name='Nguyễn Văn A'
    return(
        <div>
            Main
            <Products sl={soluong} name= {name} />
        </div>
    )
}