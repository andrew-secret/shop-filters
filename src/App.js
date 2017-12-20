import React, { Component } from "react";
import "./App.css";
import Header from './components/Header/Header';
import ShopList from "./components/ShopList/ShopList";
import FilterBar from "./components/FilterBar/FilterBar";

import { findById, incrementRating, updateShopItems } from './lib/scripts/shopHelper';
import { StickyContainer } from 'react-sticky';
import { base } from './base';



class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shopitems: [],
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
                        updateRating={this.updateRating}
                        shopitems={shopitems}/>
                </StickyContainer>
            </div>
        );
    }
};

export default App;
