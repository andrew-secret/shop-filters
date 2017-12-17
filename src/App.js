import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from './components/Header/Header';
import ShopList from "./components/ShopList/ShopList";
import FilterBar from "./components/FilterBar/FilterBar";
import { StickyContainer } from 'react-sticky';
import { toggleClass, findById, updateList, reset} from './lib/shopHelper';
import { sortBy } from 'lodash';

const shopitems = [
    {
        id: 1,
        brand: "Asics Tiger",
        model: "Sneaker 'Gel-Lyte III",
        price: 69.95,
        image: "asics-tiger.png",
        gender: "male",
        rating: false,
    },
    {
        id: 2,
        brand: "Nike",
        model: "Fitnessschuhe 'Metcon R…",
        price: 124.99,
        image: "nike-shoe.png",
        gender: "male",
        rating: false,
    },
    {
        id: 3,
        brand: "Mazine",
        model: "Branston Kapuzenjacke",
        price: 269.97,
        image: "mazine-jacket.png",
        gender: "male",
        rating: false,
    },
    {
        id: 4,
        brand: "VERO MODA",
        model: "Sommer-Playsuit",
        price: 29.90,
        image: "vero-moda-dress.png",
        gender: "female",
        rating: false,
    },
    {
        id: 5,
        brand: "VILA",
        model: "Top VIBERRY",
        price: 39.90,
        image: "vila-dress.png",
        gender: "female",
        rating: false,
    },
    {
        id: 6,
        brand: "BEACH TIME",
        model: "Tanktop  (2 Stück)",
        price: 29.90,
        image: "beach-shirt.png",
        gender: "female",
        rating: false,
    },
    {
        id: 7,
        brand: "VERO MODA",
        model: "Sommer-Playsuit",
        price: 29.90,
        image: "vero-moda-dress.png",
        gender: "female",
        rating: false,
    },
    {
        id: 8,
        brand: "VILA",
        model: "Top VIBERRY",
        price: 39.90,
        image: "vila-dress.png",
        gender: "female",
        rating: false,
    },
    {
        id: 9,
        brand: "BEACH TIME",
        model: "Tanktop  (2 Stück)",
        price: 22.90,
        image: "beach-shirt.png",
        gender: "female",
        rating: false,
    },
];

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shopitems,
            sortKey: 'NONE',
        };

        this.onSort = this.onSort.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSort(sortKey) {
        this.setState({ sortKey });
    }

    handleChange(evnt, sortKey) {
        this.setState({
            sortKey: evnt.target.value,
        })
    }

    render() {
        const {
            gender,
            currentTab,
            shopitems,
            sortKey
        } = this.state;

        return (
            <div className="App">
                <Header/>
                <StickyContainer>
                    <FilterBar
                        sortKey={sortKey}
                        onSort={this.onSort}
                        handleChange={this.handleChange}/>
                    <ShopList
                        sortKey={sortKey}
                        onSort={this.onSort}
                        shopitems={shopitems}/>
                </StickyContainer>
            </div>
        );
    }
};

export default App;
