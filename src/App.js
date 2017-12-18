import React, { Component } from "react";
import "./App.css";
import Header from './components/Header/Header';
import ShopList from "./components/ShopList/ShopList";
import FilterBar from "./components/FilterBar/FilterBar";
import { StickyContainer } from 'react-sticky';

const shopitems = [
    {
        id: 1,
        brand: "Puma",
        model: "Vintage retro blue grey Puma jacket",
        price: 69.95,
        image: "puma-jacket-green.png",
        gender: "female",
        rating: false,
    },
    {
        id: 2,
        brand: "Polar",
        model: "Fitnessschuhe 'Metcon R…",
        price: 124.99,
        image: "polar-sweater-navy.png",
        gender: "male",
        rating: false,
    },
    {
        id: 3,
        brand: "Puma",
        model: "Vintage retro pink PUMA jacket",
        price: 269.97,
        image: "puma-jacket-pink.png",
        gender: "male",
        rating: false,
    },
    {
        id: 4,
        brand: "Adidas",
        model: "Vintage retro neon Adidas jacket",
        price: 129.90,
        image: "adidas-jacket-neon.png",
        gender: "female",
        rating: false,
    },
    {
        id: 5,
        brand: "Polar",
        model: "Polar 90´s Jeans Light Blue",
        price: 84.90,
        image: "polar-jeans-blue.png",
        gender: "male",
        rating: false,
    },
    {
        id: 6,
        brand: "Magenta",
        model: "Magenta Plant Wool Red 6 Panel",
        price: 39.90,
        image: "magenta-cap-red.png",
        gender: "male",
        rating: false,
    },
    {
        id: 7,
        brand: "Puma",
        model: "Sommer-Playsuit",
        price: 79.90,
        image: "puma-jacket.png",
        gender: "female",
        rating: false,
    },
    {
        id: 8,
        brand: "Polar",
        model: "Top VIBERRY",
        price: 149.90,
        image: "polar-sweater-green.png",
        gender: "male",
        rating: false,
    },
    {
        id: 9,
        brand: "Helas",
        model: "Hélas UMB High Def Tee White",
        price: 34.90,
        image: "helas-tshirt.png",
        gender: "male",
        rating: false,
    },
    {
        id: 10,
        brand: "Polar",
        model: "Polar 90´s Jeans Blue",
        price: 89.95,
        image: "polar-jeans.png",
        gender: "male",
        rating: false,
    },
    {
        id: 11,
        brand: "Adidas Alltimers",
        model: "Adidas x Alltimers Jersey Blue/White/Scarlet",
        price: 59.90,
        image: "adidas-longsleeve.png",
        gender: "male",
        rating: false,
    },
    {
        id: 12,
        brand: "Magenta",
        model: "Magenta Plant Wool Red 6 Panel  ",
        price: 39.90,
        image: "magenta-cap.png",
        gender: "male",
        rating: false,
    },
    {
        id: 13,
        brand: "PUMA",
        model: "Vintage retro blue grey PUMA jacket",
        price: 69.95,
        image: "puma-jacket-green.png",
        gender: "female",
        rating: false,
    },
    {
        id: 14,
        brand: "Polar",
        model: "Fitnessschuhe 'Metcon R…",
        price: 124.99,
        image: "polar-sweater-navy.png",
        gender: "male",
        rating: false,
    },
    {
        id: 15,
        brand: "Puma",
        model: "Vintage retro pink PUMA jacket",
        price: 269.97,
        image: "puma-jacket-pink.png",
        gender: "male",
        rating: false,
    },
    {
        id: 16,
        brand: "Adidas",
        model: "Vintage retro neon Adidas jacket",
        price: 129.90,
        image: "adidas-jacket-neon.png",
        gender: "female",
        rating: false,
    },
    {
        id: 5,
        brand: "Polar",
        model: "Polar 90´s Jeans Light Blue",
        price: 84.90,
        image: "polar-jeans-blue.png",
        gender: "male",
        rating: false,
    },
    {
        id: 17,
        brand: "Magenta",
        model: "Magenta Plant Wool Red 6 Panel",
        price: 39.90,
        image: "magenta-cap-red.png",
        gender: "male",
        rating: false,
    },
    {
        id: 18,
        brand: "Puma",
        model: "Sommer-Playsuit",
        price: 79.90,
        image: "puma-jacket.png",
        gender: "female",
        rating: false,
    },
    {
        id: 19,
        brand: "Polar",
        model: "Top VIBERRY",
        price: 149.90,
        image: "polar-sweater-green.png",
        gender: "male",
        rating: false,
    },
    {
        id: 20,
        brand: "Helas",
        model: "Hélas UMB High Def Tee White",
        price: 34.90,
        image: "helas-tshirt.png",
        gender: "male",
        rating: false,
    },
    {
        id: 21,
        brand: "Polar",
        model: "Polar 90´s Jeans Blue",
        price: 89.95,
        image: "polar-jeans.png",
        gender: "male",
        rating: false,
    },
    {
        id: 22,
        brand: "Adidas Alltimers",
        model: "Adidas x Alltimers Jersey Blue/White/Scarlet",
        price: 59.90,
        image: "adidas-longsleeve.png",
        gender: "male",
        rating: false,
    },
    {
        id: 23,
        brand: "Magenta",
        model: "Magenta Plant Wool Red 6 Panel  ",
        price: 39.90,
        image: "magenta-cap.png",
        gender: "male",
        rating: false,
    }
];

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shopitems,
            sortKey: 'NONE',
            loadMore: 9,
        };

        this.onSort = this.onSort.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showMore = this.showMore.bind(this);
    }

    showMore() {
        this.setState({
            loadMore: this.state.loadMore + 9
        })
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
            shopitems,
            sortKey,
            loadMore
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
                        loadMore={loadMore}
                        showMore={this.showMore}
                        shopitems={shopitems}/>
                </StickyContainer>
            </div>
        );
    }
};

export default App;
