import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from './components/Header/Header';
import ShopList from "./components/ShopList/ShopList";
import FilterBar from "./components/FilterBar/FilterBar";
import { StickyContainer } from 'react-sticky';

const shopitems = [
    {
        id: 1,
        brand: "Asics Tiger",
        model: "Sneaker 'Gel-Lyte III",
        price: "69,95",
        image: "asics-tiger.png",
        rating: false,
    },
    {
        id: 2,
        brand: "Nike",
        model: "Fitnessschuhe 'Metcon R…",
        price: "124,99",
        image: "nike-shoe.png",
        rating: false,
    },
    {
        id: 3,
        brand: "Mazine",
        model: "Branston Kapuzenjacke",
        price: "269,97",
        image: "mazine-jacket.png",
        rating: false,
    },
    {
        id: 4,
        brand: "VERO MODA",
        model: "Sommer-Playsuit",
        price: "29,90",
        image: "vero-moda-dress.png",
        rating: false,
    },
    {
        id: 5,
        brand: "VILA",
        model: "Top VIBERRY",
        price: "39,90",
        image: "vila-dress.png",
        rating: false,
    },
    {
        id: 6,
        brand: "BEACH TIME",
        model: "Tanktop  (2 Stück)",
        price: "22,90",
        image: "beach-shirt.png",
        rating: false,
    },
]

class App extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          shopitems
        };

      }
    
    render() {
        return (
            <div className="App">
                <Header/>
                <StickyContainer>
                    <FilterBar />
                    <ShopList 
                        shopitems={this.state.shopitems}/>
                </StickyContainer>
            </div>

        );
    }
}

export default App;
