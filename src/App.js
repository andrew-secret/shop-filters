import React, { Component } from "react";
import "./App.css";
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import DetailView from './views/DetailView/DetailView';
import ShopView from './views/ShopView/ShopView';
import StartpageView from './views/StartpageView/StartpageView';

import { findById, incrementRating, updateShopItems } from './lib/scripts/shopHelper';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StickyContainer } from 'react-sticky';
import { base } from './base';
import * as routes from './constants/routes';



const shopitems = [
    {
        id: 1,
        brand: "Puma",
        model: "Vintage retro blue grey Puma jacket",
        price: 69.95,
        image: "puma-jacket-green.png",
        gender: "female",
        rating: 0,
    },
    {
        id: 2,
        brand: "Polar",
        model: "Fitnessschuhe 'Metcon R…",
        price: 124.99,
        image: "polar-sweater-navy.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 3,
        brand: "Puma",
        model: "Vintage retro pink PUMA jacket",
        price: 269.97,
        image: "puma-jacket-pink.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 4,
        brand: "Adidas",
        model: "Vintage retro neon Adidas jacket",
        price: 129.90,
        image: "adidas-jacket-neon.png",
        gender: "female",
        rating: 0,
    },
    {
        id: 5,
        brand: "Polar",
        model: "Polar 90´s Jeans Light Blue",
        price: 84.90,
        image: "polar-jeans-blue.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 6,
        brand: "Magenta",
        model: "Magenta Plant Wool Red 6 Panel",
        price: 39.90,
        image: "magenta-cap-red.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 7,
        brand: "Puma",
        model: "Sommer-Playsuit",
        price: 79.90,
        image: "puma-jacket.png",
        gender: "female",
        rating: 0,
    },
    {
        id: 8,
        brand: "Polar",
        model: "Top VIBERRY",
        price: 149.90,
        image: "polar-sweater-green.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 9,
        brand: "Helas",
        model: "Hélas UMB High Def Tee White",
        price: 34.90,
        image: "helas-tshirt.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 10,
        brand: "Polar",
        model: "Polar 90´s Jeans Blue",
        price: 89.95,
        image: "polar-jeans.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 11,
        brand: "Adidas Alltimers",
        model: "Adidas x Alltimers Jersey Blue/White/Scarlet",
        price: 59.90,
        image: "adidas-longsleeve.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 12,
        brand: "Magenta",
        model: "Magenta Plant Wool Red 6 Panel  ",
        price: 39.90,
        image: "magenta-cap.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 13,
        brand: "PUMA",
        model: "Vintage retro blue grey PUMA jacket",
        price: 69.95,
        image: "puma-jacket-green.png",
        gender: "female",
        rating: 0,
    },
    {
        id: 14,
        brand: "Polar",
        model: "Fitnessschuhe 'Metcon R…",
        price: 124.99,
        image: "polar-sweater-navy.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 15,
        brand: "Puma",
        model: "Vintage retro pink PUMA jacket",
        price: 269.97,
        image: "puma-jacket-pink.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 16,
        brand: "Adidas",
        model: "Vintage retro neon Adidas jacket",
        price: 129.90,
        image: "adidas-jacket-neon.png",
        gender: "female",
        rating: 0,
    },
    {
        id: 17,
        brand: "Polar",
        model: "Polar 90´s Jeans Light Blue",
        price: 84.90,
        image: "polar-jeans-blue.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 18,
        brand: "Magenta",
        model: "Magenta Plant Wool Red 6 Panel",
        price: 39.90,
        image: "magenta-cap-red.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 19,
        brand: "Puma",
        model: "Sommer-Playsuit",
        price: 79.90,
        image: "puma-jacket.png",
        gender: "female",
        rating: 0,
    },
    {
        id: 20,
        brand: "Polar",
        model: "Top VIBERRY",
        price: 149.90,
        image: "polar-sweater-green.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 21,
        brand: "Helas",
        model: "Hélas UMB High Def Tee White",
        price: 34.90,
        image: "helas-tshirt.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 22,
        brand: "Polar",
        model: "Polar 90´s Jeans Blue",
        price: 89.95,
        image: "polar-jeans.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 23,
        brand: "Adidas Alltimers",
        model: "Adidas x Alltimers Jersey Blue/White/Scarlet",
        price: 59.90,
        image: "adidas-longsleeve.png",
        gender: "male",
        rating: 0,
    },
    {
        id: 24,
        brand: "Magenta",
        model: "Magenta Plant Wool Red 6 Panel  ",
        price: 39.90,
        image: "magenta-cap.png",
        gender: "male",
        rating: 0,
    }
];

const navigation = [
    { id: 1, value: 'New in', link: '#' },
    { id: 2, value: 'Coats & Jackets', link: '#' },
    { id: 3, value: 'Dresses', link: '#' },
    { id: 4, value: 'Tops', link: '#' },
    { id: 5, value: 'Knitwear', link: '#' },
    { id: 6, value: 'Jeans', link: '#' }
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
        this.updateRating = this.updateRating.bind(this);
    }

    showMore() {
        this.setState({
            loadMore: this.state.loadMore + 9
        })
    }

    updateRating(id) {
        const shopItem = findById(id, this.state.shopitems);
        const incremented = incrementRating(shopItem);
        const updatedList = updateShopItems(this.state.shopitems, incremented);
        this.setState({
            shopitems: updatedList
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

    componentWillMount () {
        this.shopItemsRef = base.syncState('shopitems', {
            context: this,
            state: 'shopitems'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.shopItemsRef);
    }

    render() {
        const {
            shopitems,
            sortKey,
            loadMore
        } = this.state;

        return (
            <div className="App">
                <Navigation />
                <StickyContainer>
                    <Router>
                        <div>
                        <Route
                            exact
                            path={routes.STARTPAGE_VIEW}
                            render={(state) => (
                                <StartpageView
                                    {...state}
                                    navigation={navigation}/>
                            )}
                        />
                        <Route
                            exact 
                            path={routes.SHOP_VIEW} 
                            render={(state) => (
                                <ShopView
                                    sortKey={sortKey}
                                    onSort={this.onSort}
                                    handleChange={this.handleChange}
                                    showMore={this.showMore}
                                    shopitems={shopitems}
                                    updateRating={this.updateRating}
                                    loadMore={loadMore}/>
                            )}
                        />
                        <Route
                            exact 
                            path={routes.DETAIL_VIEW} 
                            render={(state) => (<DetailView {...state} {...this.state}/>)}
                        />
                        </div>
                    </Router>
                </StickyContainer>
            <Footer navigation={navigation}/>
            </div>
        );
    }
};

export default App;
