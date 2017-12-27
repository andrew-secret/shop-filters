import React, { Component } from "react";
import "./App.css";
import Header from './components/Header/Header';
import ShopList from "./components/ShopList/ShopList";
import FilterBar from "./components/FilterBar/FilterBar";
import DetailView from './views/DetailView/DetailView';
import ShopView from './views/ShopView/ShopView';

import { findById, incrementRating, updateShopItems } from './lib/scripts/shopHelper';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StickyContainer } from 'react-sticky';
import { base } from './base';
import * as routes from './constants/routes';


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
                        <Router>
                            <div>
                            <Route
                                exact 
                                path={routes.SHOP_VIEW} 
                                render={(routeProps) => (
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
                                render={(routeProps) => (<DetailView {...routeProps} {...this.state}/>)}
                            />
                            </div>
                        </Router>
                    </StickyContainer>
            </div>
        );
    }
};

export default App;
