import { useState } from 'react'
import NavBar from "./components/navbar"
import Card from "./UI/Card"
import "./App.css"
import one from "./assets/macbook air.jpeg"
import two from "./assets/macbook pro m1.jpeg"
import three from "./assets/macbook pro m2.jpeg"
import four from "./assets/HP Celeron.jpeg"
import five from "./assets/Dell Inspiron.jpeg"
import six from "./assets/hp envy.png"
import seven from "./assets/yoga.jpeg"
import eight from "./assets/amd.jpeg"
import ShoppingList from './components/ShoppingList'
function App() {
    const[pageState, setPageState] = useState(0);
    function PageHandler(number){
        console.log("bye")
        setPageState(number);
    }
    function ReturnHandler(){
        setPageState(0);
    }
    const laptops = [
        {
            name: "MacBook Air",
            price: "$749.99",
            src: one
        },
        {
            name: "MacbookPro M1",
            price: "$998.99",
            src: two
        },
        {
            name: "MacbookPro M2",
            price: "$1199.99",
            src: three
        },
        {
            name: "HP Chromebook Intel Celeron",
            price: "$149.99",
            src: four
        },
        {
            name: "Dell Inspiron",
            price: "$549.99",
            src: five
        },
        {
            name: "HP Envy",
            price: "$499.99",
            src: six
        },
        {
            name: "Lenovo Yoga 7i",
            price: "$899.99",
            src: seven
        },
        {
            name: "HP AMD Ryzen 3",
            price: "$540.00",
            src: eight
        },
    ]
    return (
        <div>
        {pageState === 0 && <div>
        <NavBar pageState={PageHandler}>

        </NavBar>

        <body>
  <div class="container">
    <div class="header">
      <div class="logo">Computers</div>
    </div>

    <div class="computers">
        {laptops.map((laptop) => (
            <div class="card1">
            <p class="title">{laptop.name}</p>
            <img src={laptop.src} alt={laptop.name} style={{ width: '250px', height: '150px' }}/>
            <p class = "price">{laptop.price}</p>
          </div>
        ))}
    </div>

    <div class="footer">
      <p>E commis</p>
    </div>
  </div>
</body>

        
        </div>
        }
        {pageState === 1 && <ShoppingList OnReturn={ReturnHandler}></ShoppingList>}
        </div>
    )
}
export default App
