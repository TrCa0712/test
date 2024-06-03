import './header.css'
import img1 from '../../images/hinh1.jpeg'
import { FaCat } from "react-icons/fa";

export default function Header() {
    return (
        <>
            <div>
                Header móa như con cặc
            </div>
            <img src={img1} />
            <FaCat />
        </>
    )
}