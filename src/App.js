// import logo from './logo.svg';
// import './App.css';

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import './style.css'

// function App() {
//   let gia=10000
//   let soluong=7
//   return (
//     <div className="contain" >
//       <h1>Học Reactjs</h1>
//       <h1>Giá: {gia} </h1>
//       <h1>Số lượng: {soluong} </h1>
//       <h1>Tổng tiền: {gia*soluong} </h1>
//     </div>
//   );
// }

// export default App;
function App(){

  return(
    <div>

    <Header />
    <Main />
    <Footer />
    </div>
  )
}

export default App